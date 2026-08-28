module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { nombre, telefono, correo, sucursal, marca } = req.body || {};

  if (!nombre || !telefono || !correo || !sucursal || !marca) {
    return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios' });
  }

  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    return res.status(500).json({ ok: false, error: 'GOOGLE_SHEET_URL no configurada en Vercel' });
  }

  try {
    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'registrar',
        nombre, telefono, correo, sucursal, marca
      }),
      redirect: 'follow'
    });

    const text = await response.text();
    
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(500).json({ ok: false, error: 'Google no devolvió JSON válido. ¿Usaste la URL /exec y no /dev? Respuesta: ' + text.substring(0, 200) });
    }

    if (data.ok) {
      return res.status(200).json({ ok: true, id: data.id });
    } else {
      return res.status(500).json({ ok: false, error: data.error || 'Error en Google Sheets' });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: 'No se pudo conectar a Google: ' + err.message });
  }
};
