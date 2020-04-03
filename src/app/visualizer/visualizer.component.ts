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
      }
      ];
    const links = [
      {
        "source": "http://0.0.0.0:3333/ontology/0801/beol/v2#Archive",
        "target": "http://0.0.0.0:3333/ontology/0801/beol/v2#basicLetter",
        "label": "subClassOf"
      },
    ];
    const gData = {'nodes': nodes, 'links': links};

    this.graph.graphData(gData);
    this.graph.nodeLabel('label');
    this.graph.linkLabel('label');
    this.graph.nodeColor('red');

  }
  ngAfterViewInit() {
    this.graph(this.graphcontainer.nativeElement);
  }
}
