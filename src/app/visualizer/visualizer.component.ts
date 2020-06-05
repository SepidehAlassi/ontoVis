import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MatRadioChange} from '@angular/material/radio';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';



@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit, AfterViewInit {
  @ViewChild('graphcontainer', {read: ElementRef}) graphcontainer: ElementRef;
  graph = ForceGraph3D();
  dimension = '3';
  constructor() { }

  ngOnInit(): void {
    const ontoInfo = require('./biblio.json');
    const gData = {'nodes': ontoInfo.nodes, 'links': ontoInfo.links};
    this.graph.graphData(gData);
    // node design
    this.graph.nodeLabel('label');
    this.graph.nodeAutoColorBy('class');
    this.graph.enableNodeDrag(true);
    this.graph.nodeThreeObject((node) => {
      let geometry;
      if (node[`group`] === 'literal') {
        geometry = new THREE.BoxGeometry(10, 5, 7);
      } else {
        geometry = new THREE.SphereGeometry(5, 16, 12);
        geometry.applyMatrix(new THREE.Matrix4().makeScale(2, 1.0, 1.5));
      }
      const material = new THREE.MeshLambertMaterial({
                            color: node[`color`],
                            transparent: true,
                            opacity: 0.75
                           });
      const mesh = new THREE.Mesh(geometry, material);
      return mesh; });
    // link design
    this.graph.linkLabel('label');
    this.graph.linkCurvature('curvature');
    this.graph.linkCurveRotation('rotation');
    this.graph.linkThreeObjectExtend(true);
    this.graph.linkDirectionalArrowLength(5);
    this.graph.linkDirectionalArrowRelPos(1);
    this.graph.linkWidth(1.5);

  }
  ngAfterViewInit() {
    this.graph(this.graphcontainer.nativeElement);
  }
  dimensionHandler(dimChange: MatRadioChange) {
    this.dimension = dimChange.value;
    if (this.dimension === '3') {
      this.graph.numDimensions(3);
    } else {
      this.graph.numDimensions(2);
    }
  }
  labelHandler(showLabel: MatSlideToggle) {
    console.log(showLabel.checked);
  }
}
