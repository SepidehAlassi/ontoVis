import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MatRadioChange} from '@angular/material/radio';
import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from 'three';
import {nodeDebugInfo} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit, AfterViewInit {

  ontologyName: string;
  @ViewChild('graphcontainer', {read: ElementRef}) graphcontainer: ElementRef;
  graph = ForceGraph3D();
  dimension = '3';
  constructor() { }

  ngOnInit(): void {
    this.ontologyName = "BEOL Ontology"
    const nodes = [
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "label": "Artikel",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "label": "Buch",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "label": "Buch-Inhalt",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "label": "Serie",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "label": "Serie Artikel",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "label": "Serie Buch",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "label": "Edition",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "label": "Zeitschrift",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "label": "Zeitschrift Artikel",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Organisation",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Publikation",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "label": "Übersetzung",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "label": "Varia Posthuma Artikel",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "label": "Webpage",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "label": "Website",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "label": "Website Artikel",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "label": "Publizierte Brief",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://purl.org/ontology/bibo/Article",
        "label": "http://purl.org/ontology/bibo/Article",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Artikel_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_startPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_endPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Artikel_volumeSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Artikel_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Artikel_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Artikel_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://purl.org/ontology/bibo/book",
        "label": "http://purl.org/ontology/bibo/book",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Buch_bookHasISBN",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_numPages",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_numVolumes",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_collectionNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Buch_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Buch_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://purl.org/ontology/bibo/Collection",
        "label": "http://purl.org/ontology/bibo/Collection",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Serie_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie_collectionNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie_numVolumes",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_collectionNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_startPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_endPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_volumeSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Serie Artikel_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Artikel_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://purl.org/ontology/bibo/EditedBook",
        "label": "http://purl.org/ontology/bibo/EditedBook",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Serie Buch_bookHasISBN",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_numPages",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_numVolumes",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_collectionNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Serie Buch_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Serie Buch_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "Edition_editionHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Edition_editionHasNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Edition_editionHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://purl.org/ontology/bibo/Journal",
        "label": "http://purl.org/ontology/bibo/Journal",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Zeitschrift_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift_numPages",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift_numVolumes",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_journalVolume",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_startPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_endPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_journalIssue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_volumeSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Zeitschrift Artikel_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://xmlns.com/foaf/0.1/organization",
        "label": "http://xmlns.com/foaf/0.1/organization",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Organisation_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://purl.org/dc/terms/BibliographicResource",
        "label": "http://purl.org/dc/terms/BibliographicResource",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Publikation_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publikation_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publikation_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publikation_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Publikation_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publikation_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publikation_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://purl.org/dc/terms/publisher",
        "label": "http://purl.org/dc/terms/publisher",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Verlag_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Verlag_publisherHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Übersetzung_translationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Übersetzung_translationHasLanguage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Übersetzung_translationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Varia Posthuma Artikel_editionHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Varia Posthuma Artikel_vpEndPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Varia Posthuma Artikel_vpStartPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Varia Posthuma Artikel_editionHasNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Varia Posthuma Artikel_hasURI",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "Varia Posthuma Artikel_editionHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://purl.org/ontology/bibo/Webpage",
        "label": "http://purl.org/ontology/bibo/Webpage",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Webpage_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Webpage_hasURI",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "Webpage_webpageHasHrefTag",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://purl.org/ontology/bibo/Website",
        "label": "http://purl.org/ontology/bibo/Website",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "Website_hasName",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website_hasURI",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "Website Artikel_publicationHasTitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website Artikel_publicationHasSubtitle",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website Artikel_publicationHasAbbreviation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website Artikel_publicationHasDate",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "Website Artikel_publicationHasLocation",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website Artikel_publicationHasDOI",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Website Artikel_publicationHasExternalLink",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "Publizierte Brief_publishedLetterNumber",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publizierte Brief_publishedLetterStartPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "Publizierte Brief_publishedLetterEndPage",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      }
    ];
    const links = [
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://purl.org/ontology/bibo/Article",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_startPage",
        "label": "Erste Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_endPage",
        "label": "letzte Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_volumeSubtitle",
        "label": "Untertitel des Bandes"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "target": "Artikel_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://purl.org/ontology/bibo/book",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_bookHasISBN",
        "label": "ISBN"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_numPages",
        "label": "Seitenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_numVolumes",
        "label": "Bändenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_collectionNumber",
        "label": "Serie Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "label": "Buch-Inhalt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "target": "Buch_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "label": "Einleitung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "label": "Inhalt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "http://purl.org/ontology/bibo/Collection",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "Serie_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "Serie_collectionNumber",
        "label": "Serie Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "Serie_numVolumes",
        "label": "Bändenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_collectionNumber",
        "label": "Serie Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_startPage",
        "label": "Erste Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_endPage",
        "label": "letzte Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_volumeSubtitle",
        "label": "Untertitel des Bandes"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "target": "Serie Artikel_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Book",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://purl.org/ontology/bibo/EditedBook",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_bookHasISBN",
        "label": "ISBN"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_numPages",
        "label": "Seitenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_numVolumes",
        "label": "Bändenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Collection",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_collectionNumber",
        "label": "Serie Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#BookContent",
        "label": "Buch-Inhalt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "target": "Serie Buch_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "Edition_editionHasTitle",
        "label": "Edition Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (Person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "Edition_editionHasNumber",
        "label": "Edition Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript der Edition"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "Edition_editionHasDate",
        "label": "Datum der Bearbeitung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "target": "http://purl.org/ontology/bibo/Journal",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "target": "Zeitschrift_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "target": "Zeitschrift_numPages",
        "label": "Seitenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "target": "Zeitschrift_numVolumes",
        "label": "Bändenzahl"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Article",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_journalVolume",
        "label": "Ausgabe"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_startPage",
        "label": "Erste Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_endPage",
        "label": "letzte Seite"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_journalIssue",
        "label": "Ausgabe No"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Journal",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_volumeSubtitle",
        "label": "Untertitel des Bandes"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#JournalArticle",
        "target": "Zeitschrift Artikel_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "target": "http://xmlns.com/foaf/0.1/organization",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "target": "Organisation_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://purl.org/dc/terms/BibliographicResource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "target": "Publikation_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "target": "http://purl.org/dc/terms/publisher",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "target": "Verlag_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "target": "Verlag_publisherHasLocation",
        "label": "Ort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Offizinleiter"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "target": "Übersetzung_translationHasTitle",
        "label": "Übersetzungstitle"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "target": "Übersetzung_translationHasLanguage",
        "label": "Sprache"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetzung von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Translation",
        "target": "Übersetzung_translationHasDate",
        "label": "Datum der Übersetzung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Edition",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_editionHasTitle",
        "label": "Edition Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_vpEndPage",
        "label": "End Page"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (Person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_vpStartPage",
        "label": "Start Page"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_editionHasNumber",
        "label": "Edition Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "label": "Edition der Manuskripteintrag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#CollectionArticle",
        "label": "Der Manuskript ist publiziert"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_hasURI",
        "label": "URI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript der Edition"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "Varia Posthuma Artikel_editionHasDate",
        "label": "Datum der Bearbeitung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#VPArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "http://purl.org/ontology/bibo/Webpage",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "Webpage_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "label": "ist Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "Webpage_hasURI",
        "label": "URI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "target": "Webpage_webpageHasHrefTag",
        "label": "href Tag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "target": "http://purl.org/ontology/bibo/Website",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "target": "Website_hasName",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Website",
        "target": "Website_hasURI",
        "label": "URI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://purl.org/ontology/bibo/Webpage",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasTitle",
        "label": "Publikationstitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasSubtitle",
        "label": "Untertitel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasAbbreviation",
        "label": "Abbreviation of the publication"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasDate",
        "label": "Datum der Veröffentlichung "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasLocation",
        "label": "Veröffentlichungsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Redaktor (person)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Organization",
        "label": "Editorische Organisation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publisher",
        "label": "Verlag"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Übersetzer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist bearbeitet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Edition von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "wieder abgedruckt von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Bewertet"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "Kritik von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Webpage",
        "label": "Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist Übersetztung von "
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#Publication",
        "label": "ist übersetzt"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasDOI",
        "label": "DOI"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#WebsiteArticle",
        "target": "Website Artikel_publicationHasExternalLink",
        "label": "Externer Link"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#EditedBook",
        "label": "Der Brief ist publiziert in"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "target": "Publizierte Brief_publishedLetterNumber",
        "label": "Letter Number in the Edition"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "target": "Publizierte Brief_publishedLetterStartPage",
        "label": "Start Page in Edition"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "target": "Publizierte Brief_publishedLetterEndPage",
        "label": "End Page in Edition"
      }
    ];
    const gData = {'nodes': nodes, 'links': links};

    this.graph.nodeLabel('label');
    this.graph.linkLabel('label');
    this.graph.linkWidth(1.5);

    this.graph.graphData(gData);
    this.graph.nodeAutoColorBy('class');
    this.graph.showNavInfo(true);
    this.graph.enableNodeDrag(true);
  }
  ngAfterViewInit() {
    this.graph(this.graphcontainer.nativeElement);
  }
  dimensionHandler(mrChange: MatRadioChange) {
    this.dimension = mrChange.value;
    if (this.dimension === '3') {
      this.graph.numDimensions(3);
    } else {
      this.graph.numDimensions(2);
    }
  }
}
