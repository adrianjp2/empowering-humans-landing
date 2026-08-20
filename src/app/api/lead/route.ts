import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface LeadPayload {
  nombre: string;
  email: string;
  tamanoEmpresa: string;
  aceptaPolitica: boolean;
}

export async function POST(req: Request) {
  try {
    const body: LeadPayload = await req.json();
    const { nombre, email, tamanoEmpresa, aceptaPolitica } = body;

    // Validación básica de campos
    if (!nombre || !email || !tamanoEmpresa) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben ser completados." },
        { status: 400 }
      );
    }

    if (!aceptaPolitica) {
      return NextResponse.json(
        { error: "Debes aceptar la política de privacidad." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.LEAD_NOTIFICATION_EMAIL || process.env.SMTP_USER || "info@empoweringhumans.es";

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || `"Empowering Humans Leads" <${smtpUser || "noreply@empoweringhumans.es"}>`;

    const fechaEnvio = new Date().toLocaleString("es-ES", {
      timeZone: "Europe/Madrid",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Plantilla HTML del correo con diseño elegante
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d0e12; color: #ffffff; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #1a1c24; border: 1px solid #2d303e; border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #ff4d6d, #be123c); padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; color: #ffffff; letter-spacing: -0.5px; }
          .header p { margin: 6px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.9); }
          .content { padding: 28px 24px; }
          .lead-card { background-color: #12131a; border: 1px solid #272a38; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
          .field-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #1f222e; }
          .field-row:last-child { border-bottom: none; }
          .field-label { color: #a1a1aa; font-size: 13px; font-weight: 500; }
          .field-value { color: #ffffff; font-size: 14px; font-weight: 600; text-align: right; }
          .highlight { color: #ff4d6d; }
          .badge { display: inline-block; padding: 4px 10px; background-color: rgba(0, 230, 118, 0.15); border: 1px solid rgba(0, 230, 118, 0.3); color: #00e676; border-radius: 6px; font-size: 12px; font-weight: bold; }
          .footer { text-align: center; padding: 18px; font-size: 12px; color: #71717a; border-top: 1px solid #222533; background-color: #0f1015; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Nueva Solicitud de Demostración</h1>
            <p>Landing Page Empowering Humans</p>
          </div>
          <div class="content">
            <p style="font-size: 15px; color: #e4e4e7; margin-top: 0;">
              Se ha recibido un nuevo lead cualificado interesado en una demo del software:
            </p>
            <div class="lead-card">
              <div class="field-row">
                <span class="field-label">👤 Nombre:</span>
                <span class="field-value">${nombre}</span>
              </div>
              <div class="field-row">
                <span class="field-label">✉️ Correo corporativo:</span>
                <span class="field-value"><a href="mailto:${email}" style="color: #ff4d6d; text-decoration: none;">${email}</a></span>
              </div>
              <div class="field-row">
                <span class="field-label">🏢 Tamaño de empresa:</span>
                <span class="field-value">${tamanoEmpresa} empleados</span>
              </div>
              <div class="field-row">
                <span class="field-label">📅 Fecha de recepción:</span>
                <span class="field-value">${fechaEnvio}</span>
              </div>
              <div class="field-row">
                <span class="field-label">🔒 RGPD Aceptado:</span>
                <span class="field-value"><span class="badge">Conforme</span></span>
              </div>
            </div>
            <p style="font-size: 13px; color: #a1a1aa; line-height: 1.5; margin-bottom: 0;">
              💡 <strong>Acción recomendada:</strong> Contactar con el cliente en menos de 2 horas laborables para maximizar la tasa de conversión.
            </p>
          </div>
          <div class="footer">
            © Empowering Humans • Notificación automática de leads
          </div>
        </div>
      </body>
      </html>
    `;

    // Si existen credenciales SMTP, enviar correo real
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: recipientEmail,
        replyTo: email,
        subject: `🎯 Nuevo Lead Demo: ${nombre} (${tamanoEmpresa} emp.)`,
        text: `Nuevo lead interesado en Empowering Humans:\n\nNombre: ${nombre}\nEmail: ${email}\nTamaño empresa: ${tamanoEmpresa} empleados\nFecha: ${fechaEnvio}`,
        html: htmlTemplate,
      });

      console.log(`✅ [LEAD EMAIL] Correo enviado exitosamente a ${recipientEmail} para el lead: ${email}`);

      return NextResponse.json({
        success: true,
        message: "Solicitud enviada y correo entregado correctamente.",
      });
    }

    // Modo desarrollo o fallback si aún no se han configurado credenciales SMTP
    console.log("-------------------------------------------------------");
    console.log("📨 [SIMULACIÓN LEAD RECIBIDO - CONFIGURA SMTP EN .env.local]");
    console.log(`👤 Nombre: ${nombre}`);
    console.log(`✉️ Email: ${email}`);
    console.log(`🏢 Tamaño Empresa: ${tamanoEmpresa}`);
    console.log(`🎯 Destinatario previsto: ${recipientEmail}`);
    console.log("-------------------------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Lead registrado exitosamente (Modo simulación / Configura SMTP en .env.local).",
      simulated: true,
    });
  } catch (error: unknown) {
    console.error("❌ Error al procesar el lead por correo:", error);
    const errorMessage = error instanceof Error ? error.message : "Error interno del servidor";
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el email.", details: errorMessage },
      { status: 500 }
    );
  }
}
