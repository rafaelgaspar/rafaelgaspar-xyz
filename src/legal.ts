import { htmlPage, siteFooter } from "./layout.ts";

export function impressumHtml(): string {
	return htmlPage({
		lang: "de",
		title: "Impressum — Rafael Antunes",
		description: "Angaben gemäß § 5 DDG.",
		body: `
		<header class="masthead compact">
			<p class="place"><a href="/">Rafael Antunes</a></p>
			<h1>Impressum</h1>
		</header>
		<section class="legal">
			<p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).</p>
			<address>
				Rafael Antunes<br>
				Berlin<br>
				Deutschland
			</address>
			<p>E-Mail: <a href="mailto:me@rafaelgaspar.xyz">me@rafaelgaspar.xyz</a></p>
			<h2>Verantwortlich für den Inhalt</h2>
			<p>Verantwortlich nach § 18 Abs. 2 MStV: Rafael Antunes, Berlin.</p>
			<h2>Haftung für Links</h2>
			<p>Diese Seite verweist auf externe Angebote (insbesondere GitHub). Auf deren Inhalt habe ich keinen Einfluss. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
		</section>
		${siteFooter()}`,
	});
}

export function privacyHtml(): string {
	return htmlPage({
		lang: "de",
		title: "Datenschutz — Rafael Antunes",
		description: "Datenschutzerklärung für rafaelgaspar.xyz.",
		body: `
		<header class="masthead compact">
			<p class="place"><a href="/">Rafael Antunes</a></p>
			<h1>Datenschutz</h1>
		</header>
		<section class="legal">
			<p>Diese Erklärung gilt für die Website <strong>rafaelgaspar.xyz</strong> (einschließlich <strong>www.rafaelgaspar.xyz</strong>).</p>

			<h2>Verantwortlicher</h2>
			<address>
				Rafael Antunes<br>
				Berlin, Deutschland<br>
				<a href="mailto:me@rafaelgaspar.xyz">me@rafaelgaspar.xyz</a>
			</address>

			<h2>Hosting</h2>
			<p>Die Seite wird als Cloudflare Worker bei Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA, betrieben. Cloudflare verarbeitet dabei technisch notwendige Verbindungsdaten (u. a. IP-Adresse, Zeitpunkt, aufgerufene URL, Browserkennung), um die Seite auszuliefern, gegen Missbrauch zu schützen und die Erreichbarkeit zu gewährleisten.</p>
			<p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, erreichbaren Webauftritt). Cloudflare kann Daten in den USA verarbeiten. Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert; ergänzend gelten Standardvertragsklauseln. Hinweise: <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare Privacy Policy</a>.</p>
			<p>Diese Daten werden von mir nicht zu Profilen zusammengeführt und nicht für Werbung genutzt. Speicherdauer richtet sich nach den Logs von Cloudflare (in der Regel wenige Tage, soweit nicht zur Missbrauchsabwehr länger erforderlich).</p>

			<h2>Keine eigenen Cookies, kein Tracking</h2>
			<p>Ich setze keine Analyse-, Werbe- oder Marketing-Cookies und keine Tracking-Dienste. Es gibt kein Kontaktformular, kein Konto und keinen Newsletter. Cloudflare kann technisch notwendige Cookies oder vergleichbare Schutzmechanismen einsetzen; die Seite ist ohne Einwilligungsbanner nutzbar, weil keine nicht notwendigen Tracker geladen werden.</p>

			<h2>GitHub</h2>
			<p>Die Startseite fragt im Browser die öffentliche GitHub-API ab, um Beschreibung, Sprache und Sternchen der verlinkten Repositories anzuzeigen. Dabei stellt dein Browser eine Verbindung zu GitHub, Inc. (USA) her. Ich empfange diese Anfrage nicht auf meinem Server und speichere die Antworten nicht. Es gelten die Datenschutzhinweise von GitHub: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">GitHub Privacy Statement</a>.</p>

			<h2>Schriftarten</h2>
			<p>Es werden nur systemeigene Schriften geladen. Es findet kein Abruf von Google Fonts oder anderen Schrift-CDNs statt.</p>

			<h2>E-Mail</h2>
			<p>Wenn du mich per E-Mail anschreibst, verarbeite ich die von dir übermittelten Daten zur Beantwortung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. lit. b, soweit es um vorvertragliche oder vertragliche Kommunikation geht. Speicherung so lange, wie es der Vorgang erfordert.</p>

			<h2>Deine Rechte</h2>
			<p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Außerdem das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist in der Regel die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin, <a href="https://www.datenschutz-berlin.de/">datenschutz-berlin.de</a>.</p>
			<p>Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling statt.</p>
		</section>
		${siteFooter()}`,
	});
}
