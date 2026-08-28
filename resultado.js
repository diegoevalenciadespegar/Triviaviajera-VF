module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { id, score } = req.body || {};

  if (!id || score === undefined) {
    return res.status(400).json({ ok: false, error: 'Faltan id o score' });
  }

  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    return res.status(500).json({ ok: false, error: 'GOOGLE_SHEET_URL no configurada' });
  }

  try {
    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'resultado',
        id: id,
        score: parseInt(score)
      }),
      redirect: 'follow'
    });

    const text = await response.text();
    
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(500).json({ ok: false, error: 'Google no devolvió JSON válido' });
    }

    if (data.ok) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(500).json({ ok: false, error: data.error || 'Error en Google Sheets' });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'No se pudo conectar a Google: ' + err.message });
  }
};
