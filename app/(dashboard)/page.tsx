import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Eye, Scan, Gauge, Heart, Rocket, MessageCircle, Move, Unlock, Users, GraduationCap, Home } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
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
                Mit Oktoway begleiten wir Schüler:innen dabei, ihre Gefühle bewusst wahrzunehmen, sie zu benennen und konstruktiv mit ihnen umzugehen. Das stärkt nicht nur das Lernen, sondern auch Motivation, Selbstvertrauen und ein wertschätzendes Miteinander.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end lg:col-span-5">
              <Image
                src="/favicon.png"
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
            Die 8 Wege von Oktoway
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Achtsamkeit</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Bedürfnisse erkennen und annehmen</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wahrnehmung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Perspektiven wechseln lernen</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Selbstregulation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">innere Balance finden</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Selbstakzeptanz</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">sich selbst annehmen</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Potentialentfaltung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Stärken nutzen, Schwächen verstehen</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Konfliktmanagement</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">zuhören, klar kommunizieren</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Bewegung</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Energie in Fluss bringen, Ruhe finden</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blockaden lösen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">Hindernisse erkennen und überwinden</CardContent>
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
                  <li>Mit den acht Wegen von Oktoway findest du heraus, wie du dein Potential voll entfalten kannst.</li>
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
                  <li>Oktoway vermittelt Schüler:innen Fähigkeiten zur Selbstregulation, Achtsamkeit und Konfliktlösung.</li>
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
                  <li>Oktoway unterstützt Eltern dabei, ihre Kinder auf diesem Weg zu begleiten.</li>
                  <li>Gemeinsam entsteht ein Umfeld, in dem Lernen, Entwicklung und Zusammenhalt gelingen.</li>
                </ul>
              </CardContent>
            </Card>
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
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Warum Oktoway die passende Antwort ist</h2>
          <p className="mt-4 text-lg text-gray-700">
            Das Projekt Oktoway – Acht Wege zu ganzheitlicher Stärke setzt genau hier an. Es vermittelt Schritt für Schritt Kompetenzen, die junge Menschen heute dringend brauchen:
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
                Jugendliche lernen, ihre eigenen Bedürfnisse zu erkennen und ernst zu nehmen – die Basis für Selbstfürsorge und innere Ruhe.
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
                Perspektivenwechsel schult Empathie. Wer versteht, wie andere fühlen und denken, kann Konflikte besser lösen und Beziehungen stärken.
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
                Mit Methoden wie GGEE (Gedanke → Gefühl → Entscheidung → Ergebnis) entwickeln Schüler:innen Strategien, um Stress abzubauen und wieder „auf Grün“ zu kommen.
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
                Oktoway fördert ein gesundes Selbstbild: „Ich bin gut, so wie ich bin“ – eine starke Grundlage gegen Leistungsdruck und Selbstzweifel.
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
                Die eigenen Stärken erkennen und nutzen – und gleichzeitig konstruktiv mit Schwächen umgehen: So gewinnen Jugendliche Klarheit über ihre Möglichkeiten.
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
                Körperliche Aktivität wird bewusst genutzt, um Gefühle, Gedanken und Stress in Fluss zu bringen – ein wirksamer Schlüssel zu innerer Balance.
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
                Oktoway zeigt Wege, innere Hindernisse zu erkennen, zu bearbeiten und langfristig zu vermeiden – damit Lernen und persönliche Entwicklung leichter gelingen.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="py-16 bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <ul className="space-y-3">
                <li><a href="/impressum" className="text-gray-700 hover:text-gray-900">Impressum</a></li>
                <li><a href="/datenschutz" className="text-gray-700 hover:text-gray-900">Datenschutz</a></li>
                <li><a href="/agb" className="text-gray-700 hover:text-gray-900">AGB</a></li>
                <li><a href="/kontakt" className="text-gray-700 hover:text-gray-900">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700">
                Oktoway stärkt Schüler:innen in Achtsamkeit, Selbstregulation und Konfliktlösung –
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
              <p className="text-gray-700">
                Interessiert, aber noch Fragen? Dann nimm Kontakt mit uns auf.
              </p>
              <a href="/kontakt" className="inline-block mt-4 text-primary hover:underline">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-4 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          OKTOWAY Copyright ({new Date().getFullYear()}) - Acht Wege zu ganzheitlicher Stärke
        </div>
      </div>
    </main>
  );
}
