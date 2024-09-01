import { APP_AXEPTIO_CLIENT_ID, APP_GOOGLE_ANALYTICS_ID, APP_TAG_MANAGER_ID } from "@/config/config/config";

// Fonction pour injecter les scripts dans le <head> et le <body>
export function injectScripts() {
  // Injecter le script Axeptio dans le <head>
  const axeptioScript = document.createElement('script');
  axeptioScript.innerHTML = `
    window.axeptioSettings = {
      clientId: "${APP_AXEPTIO_CLIENT_ID}",
      cookiesVersion: "fabwebprojects-fr-EU",
      googleConsentMode: {
        default: {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          wait_for_update: 500
        }
      }
    };

    (function(d, s) {
      var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
      e.async = true; e.src = "//static.axept.io/sdk.js";
      t.parentNode.insertBefore(e, t);
    })(document, "script");
  `;
  document.head.appendChild(axeptioScript);

  // Injecter le script Google Analytics dans le <head>
  const gtmScript = document.createElement('script');
  gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${APP_GOOGLE_ANALYTICS_ID}`;
  gtmScript.async = true;
  document.head.appendChild(gtmScript);

  const gtmInlineScript = document.createElement('script');
  gtmInlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '${APP_GOOGLE_ANALYTICS_ID}');
  `;
  document.head.appendChild(gtmInlineScript);

  // Injecter le noscript pour Google Tag Manager dans le <body>
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${APP_TAG_MANAGER_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>
  `;
  document.body.appendChild(noscript);
}
