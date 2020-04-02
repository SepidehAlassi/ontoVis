import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import ForceGraph3D from '3d-force-graph';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {


  @ViewChild('graph') graphcontainer: ElementRef;
  graph = ForceGraph3D();
  constructor() { }

  ngOnInit(): void {
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
    const gData = {'nodes': nodes, 'links': links}
    this.graph.graphData(gData);
    console.log(this.graph);
  }

}
