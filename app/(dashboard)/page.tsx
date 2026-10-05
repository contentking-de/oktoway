"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Eye,
  Scan,
  Gauge,
  Heart,
  Rocket,
  MessageCircle,
  Move,
  Users,
  GraduationCap,
  Home,
  Info,
  Sparkles,
  Scale,
  Flame,
  Zap,
  Brain,
  RefreshCw,
  HeartHandshake,
  Layers,
  Lightbulb,
  Link2,
  Mountain,
  Wrench,
  MapPin,
  Play,
  Backpack
} from 'lucide-react';

export default function HomePage() {
  const [openModal, setOpenModal] = useState<null | 'impressum' | 'datenschutz' | 'kontakt'>(null);
  const [currentYear, setCurrentYear] = useState<number>(2025);
  
  useEffect(() => {
    // Set current year client-side only
    setCurrentYear(new Date().getFullYear());
    
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
            <div className="lg:col-span-6 lg:pr-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#006465] uppercase">
                Entdecken · Verstehen · Wachsen
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="bg-gradient-to-r from-[#006465] to-[#f8bd39] bg-clip-text text-transparent">
                  8 Wege zur Stärke für dich.
                </span>
              </h1>
              <p className="mt-6 text-2xl text-gray-900 font-bold">
                Stärke beginnt bei dir.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Bevor wir mit anderen in Verbindung treten können, brauchen wir eine gute Verbindung zu uns selbst.
                OKTOWAY begleitet Schüler:innen dabei, sich selbst wahrzunehmen, zu verstehen und Schritt für Schritt
                innerlich stärker zu werden – achtsam, stark, gemeinsam.
              </p>
              <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-[#006465] uppercase">
                Achtsam. Stark. Gemeinsam.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Für Schüler:innen · Lehrkräfte · Eltern
              </p>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end lg:col-span-6">
              <Image
                src="/oktoway-smile.png"
                width={560}
                height={560}
                alt="OKTOWAY"
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]"
              />
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16 bg-white w-full" id="wege">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            8 Wege zur Stärke für dich.
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Kleine Schritte. Große Wirkung.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">1. Selbstfürsorge</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich gehe achtsam mit meinen Gedanken, Gefühlen und meinem Körper um.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">2. Selbstwahrnehmung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich kenne meine Stärken und Schwächen.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Gauge className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">3. Selbstregulation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich kann mich selbst steuern und regulieren.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">4. Selbstakzeptanz</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich akzeptiere mich so, wie ich bin.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Rocket className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">5. Selbstentfaltung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich nutze meine Fähigkeiten und entwickle mich weiter.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Scale className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">6. Selbstverantwortung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich übernehme Verantwortung für meine Worte und mein Handeln.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Flame className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">7. Selbstmotivation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich weiß, wie ich mich motivieren kann.</CardContent>
            </Card>
            <Card>
              <CardHeader className="gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg whitespace-nowrap">8. Selbstwirksamkeit</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Ich weiß, dass ich etwas verändern kann.</CardContent>
            </Card>
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">
            In dir steckt mehr.
          </p>
          <p className="mt-2 text-sm font-semibold tracking-[0.16em] text-[#006465] uppercase">
            Stärker. Ruhiger. Zuversichtlicher. Du.
          </p>
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
                  <li>Stärke beginnt bei dir – und in dir steckt mehr.</li>
                  <li>Lerne deine Gefühle, Stärken und Schwächen besser kennen.</li>
                  <li>Entdecke, wie du dich selbst regulieren, motivieren und entfalten kannst.</li>
                  <li>Nimm konkrete Werkzeuge mit für Stress, Konflikte und den Schulalltag.</li>
                  <li>Mit den acht Wegen von OKTOWAY wirst du stärker, ruhiger und zuversichtlicher.</li>
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
                  <li>OKTOWAY stärkt Selbstregulation, Selbstverantwortung und ein achtsames Miteinander.</li>
                  <li>Jedes Modul wird praktisch, bewegungsorientiert und altersgerecht erarbeitet – ohne lange Theorieblöcke.</li>
                  <li>Lehrkräfte erleben mehr Klarheit, Konzentration und gegenseitigen Respekt im Unterricht.</li>
                  <li>Die Schüler:innen nehmen konkrete Strategien mit: für Stress, Gefühle, Motivation und Konflikte.</li>
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
                  <li>Kinder, die sich selbst wahrnehmen, akzeptieren und regulieren können, sind selbstbewusster und ausgeglichener.</li>
                  <li>Einblicke in die 8 Wege von OKTOWAY erhalten die Eltern momentan über die Webseite.</li>
                  <li>Weitere Informationskanäle sind in Arbeit.</li>
                  <li>Gemeinsam entsteht ein Umfeld, in dem Lernen, Entwicklung und Zusammenhalt besser gelingen.</li>
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
              OKTOWAY ist Teil des Gesamtprojekts <strong>Prävention und Gesundheitsförderung durch Selbstregulation</strong> und wird von Cornelia Sacotte betrieben, die das Konzept in Eigenregie ausgearbeitet und konzeptioniert hat. Aktuell finden die OKTOWAY-Stunden in Klasse 7 statt. In der Jahrgangsstufe 7 findet neben Suchtpräventionsveranstaltungen von der Caritas auch das neu dazugekommene OKTOWAY Projekt statt. Am Schuljahresanfang wird in allen 7er Klassen einen Morgen lang das OKTOWAY-Konzept kennengelernt, erfahren und umgesetzt. Danach finden weitere Module des Projektes in den jeweiligen Klassen statt, je nach Bedarf und Thema.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="herausforderungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Was bringen unsere Jugendlichen morgens mit in die Schule?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Lernen beginnt nicht erst mit dem Unterricht. Viele junge Menschen kommen bereits mit einem vollen inneren Rucksack an.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'Leistungsdruck',
              'Social Media',
              'Müdigkeit',
              'Selbstzweifel',
              'Streit',
              'Erwartungen',
              'Vergleiche',
              'Reizüberflutung',
              'Zukunftsfragen',
              'Gefühle',
              'Angst zu versagen',
              'Pubertät'
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-4 py-2 text-sm font-medium text-red-800"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">
            Und dann sagen wir: „So. Jetzt konzentrier dich.“
          </p>
        </div>
      </section>

      <section className="py-16 bg-white w-full" id="erleben">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Mehr als Wissen – echte Erfahrungen.
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Für ein starkes Ich. Jeder der 8 Wege wird praktisch, bewegungsorientiert und altersgerecht erarbeitet.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Move className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Bewegen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Der Körper kommt ins Spiel. Bewegung, kleine Challenges, Atemübungen, Wahrnehmungsübungen.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Reflektieren</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Ich finde heraus, was das mit mir zu tun hat. Kurze Gespräche, Fragen, Austausch – keine langen Theorieblöcke.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Erleben</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Ich mache eigene Erfahrungen. Spiele, Experimente, Teamaufgaben, Perspektivwechsel.
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Werkzeuge mitnehmen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Ich weiß, was ich im Alltag tun kann. Konkrete Strategien für den Umgang mit Stress, Gefühlen, fehlender Motivation und Konflikten.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="ablauf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Verstehen. Ausprobieren. Im Alltag anwenden.
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Kleine Schritte. Große Wirkung. So entsteht der persönliche Werkzeugkoffer fürs Leben.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center mb-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">01 Ankommen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Wo stehe ich gerade? Kurzer Check-in, Bewegung oder überraschender Einstieg.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center mb-3">
                  <Play className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">02 Ausprobieren</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Ich probiere etwas aus. Spiel, Challenge, Experiment, Bewegung oder Teamaufgabe.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center mb-3">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">03 Verstehen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Was hat das mit mir zu tun? Erfahrung reflektieren, Gefühle und Verhalten verstehen, Perspektiven wechseln.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center mb-3">
                  <Backpack className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">04 Mitnehmen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Was kann ich im Alltag damit anfangen? Eine konkrete Strategie, ein Werkzeug oder ein persönlicher Vorsatz.
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">
            Mein Werkzeugkoffer fürs Leben
          </p>
        </div>
      </section>

      <section className="py-16 bg-white w-full" id="warum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Warum ein Oktopus?
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Kleine Tiere. Große Inspiration. Genau diese Fähigkeiten brauchen auch junge Menschen, um ihren eigenen Weg zu finden.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Intelligent</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Er lernt, beobachtet und löst Probleme.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Anpassungsfähig</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Er findet sich in neuen Situationen zurecht und bleibt flexibel.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Scan className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Wahrnehmungsstark</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Er nimmt seine Umgebung sehr genau wahr.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Einfühlsam</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Er spürt seine Umwelt und reagiert sensibel auf Veränderungen.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Layers className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Vielseitig</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Acht Arme – viele Möglichkeiten.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Kreativ</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Wenn ein Weg nicht funktioniert, findet er einen anderen.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#006465]/10 text-[#006465] flex items-center justify-center">
                  <Link2 className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Verbunden</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Seine Arme können eigenständig handeln und gehören trotzdem zu einem Ganzen.</CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#f8bd39]/10 text-[#f8bd39] flex items-center justify-center">
                  <Mountain className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Ausdauernd</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Er bleibt ruhig, auch wenn es herausfordernd wird, und findet immer neue Lösungen.</CardContent>
            </Card>
          </div>
          <p className="mt-8 text-sm font-semibold tracking-[0.16em] text-[#006465] uppercase">
            8 Tentakel. 8 Fähigkeiten. 8 Wege zur Stärke.
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
                OKTOWAY stärkt Schüler:innen in Selbstfürsorge, Selbstregulation und Selbstwirksamkeit –
                praktisch, bewegungsorientiert und mit einem Werkzeugkoffer fürs Leben.
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
                  <div className="text-sm text-gray-600 mt-0 leading-none">8 Wege zur Stärke für dich</div>
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
          OKTOWAY Copyright ({currentYear}) – 8 Wege zur Stärke für dich
        </div>
      </div>
    </main>
  );
}
