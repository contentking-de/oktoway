"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Eye, Scan, Gauge, Heart, Rocket, MessageCircle, Move, Unlock, Users, GraduationCap, Home, Info } from 'lucide-react';

export default function HomePage() {
  const [openModal, setOpenModal] = useState<null | 'impressum' | 'datenschutz' | 'kontakt'>(null);
  
  useEffect(() => {
    // Open Datenschutz modal when arriving with #datenschutz
    if (typeof window !== 'undefined' && window.location.hash === '#datenschutz') {
      setOpenModal('datenschutz');
    }
    const handler = () => setOpenModal('datenschutz');
    window.addEventListener('open-datenschutz', handler as EventListener);
    return () => window.removeEventListener('open-datenschutz', handler as EventListener);
  }, []);
  return (
    <main>
      {/* Open Datenschutz modal if hash present or custom event fired */}
      {/**/}
      {/**/}
      
      
      <section className="py-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="lg:col-span-7 lg:pr-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-[#006465] to-[#f8bd39] bg-clip-text text-transparent">
                  Acht Wege zu ganzheitlicher Stärke
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 font-bold">
                Bevor wir mit anderen in Verbindung treten können, brauchen wir eine gute Verbindung zu uns selbst.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Mit OKTOWAY begleiten wir Schüler:innen dabei, ihre Gefühle bewusst wahrzunehmen, sie zu benennen und konstruktiv mit ihnen umzugehen. Das stärkt nicht nur das Lernen, sondern auch Motivation, Selbstvertrauen und ein wertschätzendes Miteinander.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end lg:col-span-5">
              <Image
                src="/oktoway-smile.png"
                width={320}
                height={320}
                alt="OKTOWAY"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16 bg-white w-full" id="wege">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Die 8 Wege von OKTOWAY
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Achtsamkeit</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Bedürfnisse erkennen und annehmen ist der beste Weg zu mehr Achtsamkeit</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wahrnehmung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Perspektiven wechseln lernen stärkt Empathie und Klarheit in der Wahrnehmung</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Selbstregulation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Innere Balance finden gelingt durch bewusste Selbstregulation im Alltag</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Selbstakzeptanz</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Sich selbst annehmen bildet die Basis für Selbstvertrauen und Gelassenheit</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Potentialentfaltung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Stärken nutzen und Schwächen verstehen öffnet Räume für echte Potentialentfaltung</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Konfliktmanagement</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Zuhören und klar kommunizieren lässt Konflikte konstruktiv und respektvoll lösen</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bewegung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Bewegung bringt Energie in Fluss und führt zu mehr innerer Ruhe</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blockaden lösen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Hindernisse erkennen und überwinden macht den Weg frei für Lernen und Entwicklung</CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      <section className="py-16 bg-gray-50" id="fuer-wen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Für Schüler:innen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Finde deine innere Stärke</li>
                  <li>Lerne deine Gefühle besser kennen und gehe selbstbewusst mit ihnen um.</li>
                  <li>Entdecke, was dich motiviert – und wie du Blockaden überwinden kannst.</li>
                  <li>Stärke deine Konzentration, deinen Umgang mit Stress und deine Fähigkeit, Konflikte zu lösen.</li>
                  <li>Mit den acht Wegen von OKTOWAY findest du heraus, wie du dein Potential voll entfalten kannst.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Für Lehrer:innen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mehr Ruhe und Motivation im Klassenzimmer</li>
                  <li>OKTOWAY vermittelt Schüler:innen Fähigkeiten zur Selbstregulation, Achtsamkeit und Konfliktlösung.</li>
                  <li>Das sorgt für mehr Klarheit, Konzentration und gegenseitigen Respekt.</li>
                  <li>Lehrkräfte erleben dadurch ein konstruktiveres Lernklima und weniger Störungen im Unterricht.</li>
                  <li>Begleitende Materialien und Übungen machen die Umsetzung leicht und praxisnah.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Home className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Für Eltern</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Starke Kinder – starke Familien</li>
                  <li>Kinder, die ihre Gefühle verstehen und regulieren können, sind selbstbewusster und ausgeglichener.</li>
                  <li>OKTOWAY unterstützt Eltern dabei, ihre Kinder auf diesem Weg zu begleiten.</li>
                  <li>Gemeinsam entsteht ein Umfeld, in dem Lernen, Entwicklung und Zusammenhalt gelingen.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <div className="h-16 w-16 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center shrink-0">
              <Info className="h-8 w-8" />
            </div>
            <p className="text-lg text-gray-700">
              OKTOWAY ist Teil des Gesamtprojekts soziale Prävention an der Realschule des BZM Markdorf und wird von Cornelia Sacotte betrieben, die das Konzept in Eigenregie ausgearbeitet und konzeptioniert hat. Aktuell finden die OKTOWAY-Stunden in Klasse 7 statt. In der Jahrgangsstufe 7 findet neben Suchtpräventionsveranstaltungen von der Caritas auch das neu dazugekommene OKTOWAY Projekt statt. Am Schuljahresanfang wird in allen 7er Klassen einen Morgen lang das OKTOWAY-Konzept kennengelernt, erfahren und umgesetzt. Danach finden weitere Module des Projektes in den jeweiligen Klassen statt, je nach Bedarf und Thema.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="herausforderungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Herausforderungen für Schüler:innen und Jugendliche heute
          </h2>
          <ol className="mt-8 space-y-6 list-decimal pl-5 text-gray-700">
            <li>
              <div className="text-lg font-semibold text-gray-900">
                Dauerstress und Leistungsdruck
              </div>
              <p className="mt-2">
                Viele Jugendliche stehen unter hohem schulischem und außerschulischem Druck: Noten, Prüfungen, Social Media–Vergleiche und Zukunftsängste. Das führt oft zu Anspannung, Schlafproblemen oder dem Gefühl, nie „genug“ zu sein.
              </p>
            </li>
            <li>
              <div className="text-lg font-semibold text-gray-900">
                Emotionale Überforderung
              </div>
              <p className="mt-2">
                Gefühle wie Angst, Wut oder Traurigkeit sind normal – doch vielen fehlt das Werkzeug, sie bewusst wahrzunehmen und konstruktiv damit umzugehen. Stattdessen stauen sich Emotionen auf oder brechen unkontrolliert heraus.
              </p>
            </li>
            <li>
              <div className="text-lg font-semibold text-gray-900">
                Digitale Ablenkung und ständige Erreichbarkeit
              </div>
              <p className="mt-2">
                Smartphones, Social Media und Gaming machen es schwer, sich zu konzentrieren und echte Pausen zu erleben. Die ständige Reizüberflutung kann zu innerer Unruhe und nachlassender Aufmerksamkeit führen.
              </p>
            </li>
            <li>
              <div className="text-lg font-semibold text-gray-900">
                Konflikte und fehlende Kommunikation
              </div>
              <p className="mt-2">
                Ob in der Klasse, in der Familie oder im Freundeskreis – Missverständnisse und Streitigkeiten belasten. Ohne Strategien zur gewaltfreien Kommunikation eskalieren Konflikte schnell.
              </p>
            </li>
            <li>
              <div className="text-lg font-semibold text-gray-900">
                Orientierungslosigkeit und Selbstzweifel
              </div>
              <p className="mt-2">
                Die Suche nach der eigenen Identität kann verunsichern. Viele Jugendliche fragen sich: „Wer bin ich?“, „Was kann ich?“, „Wie finde ich meinen Platz?“ – und fühlen sich dabei allein.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="py-16 bg-white w-full" id="warum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Warum OKTOWAY die passende Antwort ist</h2>
          <p className="mt-4 text-lg text-gray-700">
            Das Projekt OKTOWAY – Acht Wege zu ganzheitlicher Stärke setzt genau hier an. Es vermittelt Schritt für Schritt Kompetenzen, die junge Menschen heute dringend brauchen:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Achtsamkeit</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Jugendliche lernen, ihre eigenen Bedürfnisse zu erkennen und ernst zu nehmen – die Basis für Selbstfürsorge und innere Ruhe. (Atmentechniken, Stille)
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Scan className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Wahrnehmung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Perspektivenwechsel schult Empathie. Wer versteht, wie andere fühlen und denken, kann Konflikte besser lösen und Beziehungen stärken. (Eisbergmodell/ Meine Welt - deine Welt)
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Gauge className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Selbstregulation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Schüler:innen entwickeln Strategien, um in Stresssituationen von „rot“ wieder „auf Grün“ zu kommen. Mit Methoden wie z.B. GGEE (Gedanke → Gefühl → Entscheidung → Ergebnis) oder ABS lernen die Jugendlichen wieder in einen guten Zustand zu kommen.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Selbstakzeptanz</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                OKTOWAY fördert ein gesundes Selbstbild: „Ich bin gut, so wie ich bin“ – eine starke Grundlage gegen Leistungsdruck und Selbstzweifel.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Rocket className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Potentialentfaltung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Die eigenen Stärken erkennen und nutzen – und gleichzeitig konstruktiv mit Schwächen umgehen. Durch Spiele wie „Fehlerfreude“ oder „0-5“ öffnen sich neue Wege im Umgang mit Versagensängsten und sie erfahren und lernen dadurch, wieder besser zu fokussieren.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Konfliktmanagement</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Techniken wie aktives Zuhören und Ich-Botschaften helfen, Spannungen respektvoll zu klären und gemeinsam Lösungen zu finden.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Move className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Bewegung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Körperliche Aktivität wird bewusst genutzt, um Gefühle, Gedanken und Stress in Fluss zu bringen – ein wirksamer Schlüssel zu innerer Balance. (Rechte und linke Gehirnhälften gleichzeitig aktivieren)
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Unlock className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Blockaden lösen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                OKTOWAY zeigt Wege, innere Hindernisse zu erkennen, zu bearbeiten und langfristig zu vermeiden – damit Lernen und persönliche Entwicklung leichter gelingen. (Blackout Situationen z.B. in einer Klassenarbeit beheben oder bestenfalls verhindern können)
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Warum OKTOWAY – und warum ein Oktopus?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Der Oktopus gilt als eines der klügsten Tiere der Welt: Er passt sich schnell an neue Situationen an, löst Probleme kreativ und bleibt dabei flexibel. Genau diese Fähigkeiten fördern wir mit OKTOWAY. Unsere acht Wege stehen – wie die acht Arme des Oktopus – für acht Kompetenzen, die Schülerinnen und Schüler stark machen. So wird der Oktopus zum Sinnbild für Anpassungsfähigkeit, Klarheit und Ganzheit – und OKTOWAY zum Weg, diese Stärke im Schulalltag zu leben.
          </p>
        </div>
      </section>
      <footer className="py-16 bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <ul className="space-y-3">
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenModal('impressum')}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenModal('datenschutz')}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setOpenModal('kontakt')}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700">
                OKTOWAY stärkt Schüler:innen in Achtsamkeit, Selbstregulation und Konfliktlösung –
                mit praxisnahen Materialien und viel Herzblut für eine wertschätzende Lernkultur.
              </p>
            </div>
            <div>
              <address className="not-italic text-gray-700">
                Cornelia Sacotte<br />
                Lichtenbergstrasse 41<br />
                88677 Markdorf<br />
                Deutschland
              </address>
            </div>
            <div>
              <div className="flex items-center">
                <Image src="/oktoway-smile.png" alt="OKTOWAY" width={64} height={64} className="h-16 w-16" />
                <div className="ml-3 leading-tight">
                  <div className="text-2xl font-extrabold leading-none">
                    <span className="text-[#006465]">OKTO</span>
                    <span className="text-[#f8bd39]">WAY</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-0 leading-none">Acht Wege zu ganzheitlicher Stärke</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpenModal(null)} />
          <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {openModal === 'impressum' && 'Impressum'}
                {openModal === 'datenschutz' && 'Datenschutz'}
                {openModal === 'kontakt' && 'Kontakt'}
              </h3>
              <Button variant="ghost" onClick={() => setOpenModal(null)}>
                Schließen
              </Button>
            </div>
            <div className="mt-4 text-gray-700 space-y-3">
              {openModal === 'impressum' && (
                <div>
                  <p><strong>Verantwortlich:</strong></p>
                  <p>
                    Cornelia Sacotte<br />
                    Lichtenbergstrasse 41<br />
                    88677 Markdorf<br />
                    Deutschland
                  </p>
                  <p className="mt-3">
                    Es handelt sich hierbei um ein nicht-kommerzielles Projekt, welches ein reines Informationsangebot an Schüler, Lehrer und Eltern darstellt. Das Projekt wird nicht online oder außerhalb der Schule beworben.
                  </p>
                  <p className="mt-3">
                    Inhaltlich verantwortlich i.S.v. § 18 Abs. 2 MStV: Cornelia Sacotte, Lichtenbergstrasse 41, 88677 Markdorf
                  </p>
                  <p className="mt-3">
                    Wir sind nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              )}
              {openModal === 'datenschutz' && (
                <div>
                  <div className="space-y-4">
                    <div>
                      <p><strong>1. Verantwortliche Stelle</strong></p>
                      <p className="mt-1">Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:</p>
                      <p className="mt-1">
                        Projekt OKTOWAY<br />
                        Cornelia Sacotte<br />
                        Lichtenbergstrasse 41<br />
                        88677 Markdorf, Deutschland<br />
                        E-Mail: <a className="underline" href="mailto:info@oktoway.de">info@oktoway.de</a>
                      </p>
                    </div>
                    <div>
                      <p><strong>2. Zweck und Art der Webseite</strong></p>
                      <p className="mt-1">
                        Die Webseite <a href="https://oktoway.de" className="underline">https://oktoway.de</a> dient ausschließlich der Information über das nicht-kommerzielle Bildungsprojekt „OKTOWAY“.
                        Es werden keine Produkte oder Dienstleistungen verkauft, es findet keine Online-Werbung statt.
                      </p>
                    </div>
                    <div>
                      <p><strong>3. Erhebung und Speicherung personenbezogener Daten</strong></p>
                      <p className="mt-1">
                        Beim Aufrufen unserer Webseite werden durch den Webserver automatisch einige technische Informationen (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem) übermittelt.
                        Diese Daten werden ausschließlich temporär in sogenannten Logfiles gespeichert, um den sicheren Betrieb der Webseite zu gewährleisten.
                        Eine Auswertung zu Marketingzwecken findet nicht statt.
                      </p>
                    </div>
                    <div>
                      <p><strong>4. Keine Cookies & kein Tracking</strong></p>
                      <p className="mt-1">Auf dieser Webseite werden keine Cookies gesetzt, die der Analyse des Nutzerverhaltens dienen.</p>
                      <p className="mt-1">Es wird kein Tracking (wie z. B. Google Analytics, Matomo o. ä.) verwendet.</p>
                      <p className="mt-1">Es werden keine Social-Media-Plugins eingebunden.</p>
                    </div>
                    <div>
                      <p><strong>5. Kommunikation per E-Mail</strong></p>
                      <p className="mt-1">
                        Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen freiwillig übermittelten Daten (z. B. Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                        Diese Daten werden nicht an Dritte weitergegeben, sofern keine gesetzliche Pflicht besteht.
                      </p>
                    </div>
                    <div>
                      <p><strong>6. Rechtsgrundlagen der Verarbeitung</strong></p>
                      <p className="mt-1">Rechtsgrundlagen für die vorübergehende Speicherung der technischen Daten sind</p>
                      <p className="mt-1">Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Webseite) und</p>
                      <p className="mt-1">bei E-Mail-Kontakt Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen).</p>
                    </div>
                    <div>
                      <p><strong>7. Dauer der Speicherung</strong></p>
                      <p className="mt-1">Server-Logfiles werden in der Regel nach spätestens 7 Tagen automatisch gelöscht.</p>
                      <p className="mt-1">E-Mail-Daten werden nur so lange gespeichert, wie es zur Bearbeitung der Anfrage notwendig ist.</p>
                    </div>
                    <div>
                      <p><strong>8. Ihre Rechte</strong></p>
                      <p className="mt-1">Sie haben nach der DSGVO folgende Rechte:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Auskunft über die bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
                        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                        <li>Löschung („Recht auf Vergessenwerden“, Art. 17 DSGVO)</li>
                        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                      </ul>
                      <p className="mt-1">
                        Zur Ausübung dieser Rechte können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.
                        Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
                      </p>
                    </div>
                    <div>
                      <p><strong>9. Sicherheit</strong></p>
                      <p className="mt-1">Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen.</p>
                    </div>
                    <div>
                      <p><strong>10. Aktualität und Änderung dieser Datenschutzerklärung</strong></p>
                      <p className="mt-1">
                        Diese Datenschutzerklärung ist aktuell gültig (Stand: September 2025).
                        Wir behalten uns vor, sie bei Bedarf anzupassen, um sie an geänderte rechtliche Anforderungen oder bei Änderungen des Angebots anzupassen.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {openModal === 'kontakt' && (
                <div>
                  <p>Schreiben Sie uns gerne eine Nachricht.</p>
                  <p>
                    E-Mail: <a className="underline" href="mailto:info@oktoway.de">info@oktoway.de</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="py-4 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          OKTOWAY Copyright ({new Date().getFullYear()}) - Acht Wege zu ganzheitlicher Stärke
        </div>
      </div>
    </main>
  );
}
