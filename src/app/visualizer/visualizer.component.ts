import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import ForceGraph3D from '3d-force-graph';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit, AfterViewInit {

  ontologyName: string;
  @ViewChild('graphcontainer', {read: ElementRef}) graphcontainer: ElementRef;
  graph = ForceGraph3D();
  constructor() { }

  ngOnInit(): void {
    this.ontologyName = "BEOL Ontology"
    const nodes = [
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "label": "Archive",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "label": "Basis-Brief",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "label": "Bild von Dokument",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "label": "Endnote",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#entryComment",
        "label": "Kommentar zu Manuskripteintrag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "label": "Faksimile",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Figur",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "label": "Einleitung",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "label": "Brief",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskript",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "label": "Eintrag in einem Manuskript",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "label": "Seite",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Person",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "label": "Sektion",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "label": "Transkription",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "schriftliche Quelle",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAbbreviationMarkerTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAbbreviationMarkerTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAdditionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAdditionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffBrTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffBrTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCenterTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCenterTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCorrectionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCorrectionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffDeletionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffDeletionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffEntityTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffEntityTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionMarkerTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionMarkerTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFacsimileTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFacsimileTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigCaptionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigCaptionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigureTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigureTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFontTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFontTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffForeignTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffForeignTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffGapTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffGapTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHrTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHrTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHtmlTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHtmlTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffInterventionMarkerTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffInterventionMarkerTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMarginalTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMarginalTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMathTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMathTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffOriginalMarkerTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffOriginalMarkerTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffPbTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffPbTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffReferenceTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffReferenceTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffRegionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffRegionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSmallTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSmallTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionAdditionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionAdditionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionDeletionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionDeletionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableCellTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableCellTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffUnclearTag",
        "label": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffUnclearTag",
        "group": "resource",
        "class": "native"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasName_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasAbbreviation_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasLocation_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#mentionedIn_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasNumber_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#creationDate_DateValue",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasLanguage_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasURI_UriValue",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#location_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "ListValue",
        "group": "literal",
        "class": "ListValue"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#StillImageRepresentation",
        "label": "http://api.knora.org/ontology/knora-api/v2#StillImageRepresentation",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#pagenum_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "IntValue",
        "group": "literal",
        "class": "IntValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnoteHasNumber_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasCaption_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "label": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasRepertoriumNumber_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#externalRepository_UriValue",
        "label": "UriValue",
        "group": "literal",
        "class": "UriValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSystemNumber_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptStartFolium_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEndFolium_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptAdditionalFolium_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptHasShelfMark_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptStartPage_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEndPage_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "label": "http://xmlns.com/foaf/0.1/Person",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFamilyName_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasGivenName_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#personHasTitle_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasAlternativeName_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasIAFIdentifier_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasBirthDate_DateValue",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDeathDate_DateValue",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFloruitDate_DateValue",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasMarriageDate_DateValue",
        "label": "DateValue",
        "group": "literal",
        "class": "DateValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasBirthPlace_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDeathPlace_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFloruitPlace_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasMarriagePlace_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDictionaryEntries_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#sectionHasTitle_TextValue",
        "label": "TextValue",
        "group": "literal",
        "class": "TextValue"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#Region",
        "label": "http://api.knora.org/ontology/knora-api/v2#Region",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://0.0.0.0:3333/ontology/0801/beol/v2#layer_IntValue",
        "label": "IntValue",
        "group": "literal",
        "class": "IntValue"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/standoff/v2#StandoffBrTag",
        "label": "http://api.knora.org/ontology/standoff/v2#StandoffBrTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/knora-api/v2#StandoffLinkTag",
        "label": "http://api.knora.org/ontology/knora-api/v2#StandoffLinkTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/standoff/v2#StandoffRootTag",
        "label": "http://api.knora.org/ontology/standoff/v2#StandoffRootTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/standoff/v2#StandoffVisualTag",
        "label": "http://api.knora.org/ontology/standoff/v2#StandoffVisualTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/standoff/v2#StandoffTableCellTag",
        "label": "http://api.knora.org/ontology/standoff/v2#StandoffTableCellTag",
        "group": "resource",
        "class": "external"
      },
      {
        "id": "http://api.knora.org/ontology/standoff/v2#StandoffTableTag",
        "label": "http://api.knora.org/ontology/standoff/v2#StandoffTableTag",
        "group": "resource",
        "class": "external"
      }
    ];
    const links = [
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasName_TextValue",
        "label": "Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasAbbreviation_TextValue",
        "label": "Archive Arbbreviation"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#archiveHasLocation_TextValue",
        "label": "Archive Location"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#mentionedIn_TextValue",
        "label": "Mentioned In"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Empfänger"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor/Verfasser"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasNumber_TextValue",
        "label": "Briefnummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#creationDate_DateValue",
        "label": "Datum der Entstehung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasLanguage_TextValue",
        "label": "Sprache"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasURI_UriValue",
        "label": "PDF des Briefes in der Vollfassung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#location_TextValue",
        "label": "Standort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Zeichen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "erwähnte Person"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://api.knora.org/ontology/knora-api/v2#StillImageRepresentation",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#pagenum_TextValue",
        "label": "Seitenbezeichnung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "ist ein Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "Sequenznummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnoteHasNumber_TextValue",
        "label": "Endnote-Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Zeichen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#endnote",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#entryComment",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#entryComment",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#entryComment",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "Sequenznummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#entryComment",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "label": "Kommentar zu"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasCaption_TextValue",
        "label": "Bildunterschrift"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#pagenum_TextValue",
        "label": "Seitenbezeichnung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "ist ein Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "Sequenznummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#facsimile",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "target": "http://api.knora.org/ontology/knora-api/v2#StillImageRepresentation",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasCaption_TextValue",
        "label": "Bildunterschrift"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#introduction",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Empfänger"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuscript des Briefs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor/Verfasser"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasNumber_TextValue",
        "label": "Briefnummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "label": "Übersetzung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#creationDate_DateValue",
        "label": "Datum der Entstehung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasLanguage_TextValue",
        "label": "Sprache"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/biblio/v2#letter",
        "label": "Der Brief ist publiziert"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasRepertoriumNumber_TextValue",
        "label": "Repertorium-Nummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letterHasURI_UriValue",
        "label": "PDF des Briefes in der Vollfassung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#location_TextValue",
        "label": "Standort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#externalRepository_UriValue",
        "label": "Dieser Brief ist auch vorhanden in"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "label": "Antwort auf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSystemNumber_TextValue",
        "label": "System number"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Zeichen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#letter",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "erwähnte Person"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "label": "Archive of Manuscript"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor/Verfasser"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptStartFolium_TextValue",
        "label": "Start Folium"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#creationDate_DateValue",
        "label": "Datum der Entstehung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEndFolium_TextValue",
        "label": "End Folium"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#location_TextValue",
        "label": "Standort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptAdditionalFolium_TextValue",
        "label": "Additional Folium"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptHasShelfMark_TextValue",
        "label": "Shelfmark"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#mentionedIn_TextValue",
        "label": "Mentioned In"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Zeichen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptStartPage_TextValue",
        "label": "Start Page"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "erwähnte Person"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEndPage_TextValue",
        "label": "End Page"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "Sequenznummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscript",
        "label": "Manuskripteintrag in"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#documentImage",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#pagenum_TextValue",
        "label": "Seitenbezeichnung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "label": "ist ein Teil von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#seqnum_IntValue",
        "label": "Sequenznummer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#page",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://xmlns.com/foaf/0.1/Person",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFamilyName_TextValue",
        "label": "Nachname"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasGivenName_TextValue",
        "label": "Vorname"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#personHasTitle_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasAlternativeName_TextValue",
        "label": "Alternative-Name"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasIAFIdentifier_TextValue",
        "label": "Gemeinsame Normdatei (GND)"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasBirthDate_DateValue",
        "label": "Geburtsdatum"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDeathDate_DateValue",
        "label": "Sterbedatum"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFloruitDate_DateValue",
        "label": "Floruit-Dataum"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasMarriageDate_DateValue",
        "label": "Hochzeitdataum"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasBirthPlace_TextValue",
        "label": "Geburtsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDeathPlace_TextValue",
        "label": "Todesort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasFloruitPlace_TextValue",
        "label": "Floruit-Ort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasMarriagePlace_TextValue",
        "label": "Trauugsort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Sohn"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasDictionaryEntries_TextValue",
        "label": "Indexeinträge"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#mentionedIn_TextValue",
        "label": "Mentioned In"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Bruder"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Neffe"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Onkel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Schüler"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Schüler"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "hat Lehrer"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#sectionHasTitle_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "label": "hat Sektion"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#section",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#manuscriptEntry",
        "label": "Transkription von"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "target": "http://api.knora.org/ontology/knora-api/v2#Region",
        "label": "Bezug zu Region"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#transcription",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#layer_IntValue",
        "label": "Schicht"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://api.knora.org/ontology/knora-api/v2#Resource",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#title_TextValue",
        "label": "Titel"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "Autor/Verfasser"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#creationDate_DateValue",
        "label": "Datum der Entstehung"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#location_TextValue",
        "label": "Standort"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasText_TextValue",
        "label": "Text"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#beolIDs_TextValue",
        "label": "BEOL-IDs"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#comment_TextValue",
        "label": "Kommentar"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#hasSubject_ListValue",
        "label": "Themen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#figure",
        "label": "Zeichen"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#writtenSource",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#person",
        "label": "erwähnte Person"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAbbreviationMarkerTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffAdditionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffBrTag",
        "target": "http://api.knora.org/ontology/standoff/v2#StandoffBrTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCenterTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffCorrectionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffDeletionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffEntityTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffLinkTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionMarkerTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffExpansionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFacsimileTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffLinkTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigCaptionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFigureTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffLinkTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffFontTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffForeignTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffGapTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHrTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffHtmlTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffInterventionMarkerTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMarginalTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffMathTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffOriginalMarkerTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffPbTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffReferenceTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffRegionTag",
        "target": "http://api.knora.org/ontology/standoff/v2#StandoffRootTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSmallTag",
        "target": "http://api.knora.org/ontology/standoff/v2#StandoffVisualTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionAdditionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionDeletionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffSubstitutionTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableCellTag",
        "target": "http://api.knora.org/ontology/standoff/v2#StandoffTableCellTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffTableTag",
        "target": "http://api.knora.org/ontology/standoff/v2#StandoffTableTag",
        "label": "subClassOf"
      },
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#StandoffUnclearTag",
        "target": "http://api.knora.org/ontology/knora-api/v2#StandoffTag",
        "label": "subClassOf"
      }
    ];
    const gData = {'nodes': nodes, 'links': links};

    this.graph.graphData(gData);
    this.graph.nodeLabel('label');
    this.graph.linkLabel('label');
    this.graph.nodeAutoColorBy('class');

  }
  ngAfterViewInit() {
    this.graph(this.graphcontainer.nativeElement);
  }
}
