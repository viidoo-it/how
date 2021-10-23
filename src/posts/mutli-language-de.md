---
title: "Sprechen Sie Deutsch?"
description: I am actually an iOS and macOS developer, but during the pandemia I started my video chat related open source projects.
date: "2021-10-22"
lang: de
slug: multi-language
---

Wie die meisten Menschen auf dieser Welt ist Englisch nicht meine Muttersprache und ich fühle mich sicherer, wenn ich in meiner eigenen Sprache sprechen und schreiben kann. So ist es auch mit diesem Tagebuch. Ich verfasse die Beiträge auf Deutsch und lasse sie dann automatisiert übersetzten. Die Qualität der Übersetzungen übertrifft in der Regel das, was ich selber auf Englisch zustande gebracht hätte, so ist es eine Win-win-Situation ;)

## Struktur

Nun soll der schöne Muttersprachliche Text natürlich nicht nur als Vorlage dienen, sondern auch zur Lektüre angeboten werden. Dazu ist es zunächst nötig, dass die Website mehrsprachig gemacht wird. Dazu gibt es mehrere Möglichkeiten:

1. Eine pragmatische Lösung ist, pro Sprache eine Website zu erstellen, die dann z.B. über eine eigene Sub-Domain veröffentlicht wird, also `en.example.com` und `de.example.com`.
2. Die andere Methode ist, jeweils eigene Seiten pro Sprache zu erzeugen. Übersichtlich gelingt das durch entsprechende Pfade zu den Dokumenten, also `/en/my-page` und `/de/my-page`.

Die zweite Variante ist meine bevorzugte. Entsprechend werden nun also alle Routen angepasst. In diesem Blog benutze ich den [Vue Router](https://next.router.vuejs.org/)...

Neben den Beiträgen muss aber auch das ganze Drumherum sprachlich angepasst werden.
