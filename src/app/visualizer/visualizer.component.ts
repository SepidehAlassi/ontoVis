import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSlider } from '@angular/material/slider';

import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';



@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})

export class VisualizerComponent implements OnInit, AfterViewInit {
  @ViewChild('graphcontainer', {read: ElementRef}) graphcontainer: ElementRef;
  graph = ForceGraph3D();
  dimension = '3';
  showLinkLabel = false;
  showNodeLabel = false;
  linkDistance = 20;
  constructor() { }

  designNode(node) {
      let depthWrite = true;
      if (this.showNodeLabel) {
        depthWrite = false;
      }
      const sprite = new SpriteText(node[`label`], 1);
      sprite.fontFace = 'Arial';
      sprite.fontWeight = 'bold';
      sprite.color = 'black';
      const geometricalWidth = sprite.text.length + 5;
      let geometry;
      if (node[`group`] === 'literal') {
        geometry = new THREE.BoxGeometry(geometricalWidth, 12, 10);
      } else {
        geometry = new THREE.SphereGeometry(10, geometricalWidth, 12);
        geometry.applyMatrix(new THREE.Matrix4().makeScale(2, 1.0, 1.5));
      }
      const material = new THREE.MeshLambertMaterial({
        color: node[`color`],
        depthWrite: depthWrite,
        transparent: false,
        opacity: 1
      });
      const obj = new THREE.Mesh(geometry, material);
      if (this.showNodeLabel) {
        // add text sprite as child
        sprite.scale.set(sprite.text.length, 12,1);
        obj.add(sprite);
      }
      return obj;
  }

  calcMiddlePos(start, end) {
    const middlePosX = start.x + (end.x - start.x) / 2;
    const middlePosY = start.y + (end.y - start.y) / 2;
    let middlePosZ;
    if (this.dimension === '3') {
      middlePosZ = start.z + (end.z - start.z) / 2 ;
    } else {
      middlePosZ = 1;
    }
    const middlePos  = { x: middlePosX, y: middlePosY, z: middlePosZ };
    return middlePos;
  }


  ngOnInit(): void {
    const ontoInfo = require('./beol.json');
    const gData = {'nodes': ontoInfo.nodes, 'links': ontoInfo.links};
    this.graph.graphData(gData);
    // node design
    this.graph.nodeLabel('label');
    this.graph.nodeAutoColorBy('class');
    this.graph.enableNodeDrag(true);
    this.graph.nodeThreeObject((node) => this.designNode(node));
    // link design
    this.graph.linkCurvature('curvature');
    this.graph.linkCurveRotation('rotation');
    this.graph.linkThreeObjectExtend(true);
    if (this.showLinkLabel === true) {
      this.graph.linkThreeObject(link => {
        // extend link with text sprite
        const sprite = new SpriteText(link[`label`]);
        sprite.color = 'lightgrey';
        sprite.textHeight = 3;
        sprite.fontWeight = 'bold';
        return sprite;
      });
      this.graph.linkPositionUpdate((sprite, {start, end}) => {
        // Position sprite
        Object.assign(sprite.position, this.calcMiddlePos(start, end));
        return false;
      });
    } else {
      this.graph.linkLabel('label');
    }
    this.graph.linkDirectionalArrowLength(5);
    this.graph.linkDirectionalArrowRelPos(1);
    this.graph.linkWidth(1.5);
    const linkForce: any = this.graph.d3Force('link');
    linkForce.distance(this.linkDistance);
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

  LinkLabelHandler(showlinkLabel: MatSlideToggle) {
    this.showLinkLabel = showlinkLabel.checked;
    this.ngOnInit(); // Re-heat simulation
  }

  NodeLabelHandler(showNodeLabel: MatSlideToggle) {
    this.showNodeLabel = showNodeLabel.checked;
    this.ngOnInit(); // Re-heat simulation
  }

  updateLinkDistance(event: any) {
    this.linkDistance = event.value;
    this.ngOnInit(); // Re-heat simulation
  }
}
