'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function OneSignal() {
    useEffect(() => {
        window.OneSignalDeferred = window.OneSignalDeferred || [];
        window.OneSignalDeferred.push(async function (OneSignal) {
            await OneSignal.init({
                appId: "e3c169f8-de90-4f6d-954e-91c57aa73dce",
                safari_web_id: "web.onesignal.auto.504512c8-952a-4d80-9d02-48e16e3cc659",
                notifyButton: {
                    enable: true,
                },
                allowLocalhostAsSecureOrigin: true, // Helpful for testing
            });
        });
    }, []);

    return (
        <Script
            src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
            strategy="afterInteractive"
        />
    );
}
