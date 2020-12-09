import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import ForceGraph3D from '3d-force-graph';
import * as THREE from 'three';
import SpriteText from 'three-spritetext';
import * as d3 from 'd3';



@Component({
  selector: 'app-list-visualizer',
  templateUrl: './list-visualizer.component.html',
  styleUrls: ['./list-visualizer.component.css']
})
export class ListVisualizerComponent implements OnInit, AfterViewInit {
  @ViewChild('graphcontainer', {read: ElementRef}) graphcontainer: ElementRef;
  graph = ForceGraph3D();
  showNodeAsText = true;
  showNodeAsBox = false;

  constructor() { }

  designNode(node) {
    console.log('drawing box')
    const sprite = new SpriteText(node[`id`], 90, 'black');
    sprite.fontFace = 'Arial';
    sprite.fontWeight = 'bold';
    const geometry = new THREE.BoxGeometry(sprite.text.length + sprite.textHeight, 34, 10);
    const material = new THREE.MeshLambertMaterial({
      color: node[`color`],
      depthWrite: false,
      transparent: false,
      opacity: 0.3
    });
    console.log(node[`id`], sprite.text.length)
    const obj = new THREE.Mesh(geometry, material);
    sprite.scale.set(geometry.parameters.width, geometry.parameters.height, geometry.parameters.depth);
    obj.add(sprite);
    return obj;
  }

  nodeAsText(node) {
    console.log('drawing text')
    const sprite = new SpriteText(node[`id`], 32, node[`color`]);
    sprite.material.depthWrite = false;
    return sprite;
  }

  ngOnInit(): void {
    console.log('upon init:', this.showNodeAsText)
    const listData = require('./testList.json');
    const gData = {'nodes': listData.nodes, 'links': listData.links};
    this.graph.graphData(gData);
    this.graph.dagMode('td');
    this.graph.dagLevelDistance(150);
    // node design
    if (this.showNodeAsText) {
      console.log('as text');
      this.graph.nodeThreeObject(node => this.nodeAsText(node));
    }
    if (this.showNodeAsBox) {
      console.log('as box');
      this.graph.nodeThreeObject((node) => this.designNode(node));
    }
    this.graph.enableNodeDrag(true);

    this.graph.nodeId('id');
    this.graph.onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z; });
    // link design
    this.graph.linkDirectionalArrowLength(5);
    this.graph.linkDirectionalArrowRelPos(1);
    this.graph.linkWidth(2);
    this.graph.d3VelocityDecay(0.3);
    this.graph.d3Force('collision', d3.forceCollide(node => Math.cbrt(10) * 40))
    this.graph.onEngineStop(() => this.graph.zoomToFit(400));

  }

  ngAfterViewInit() {
    this.graph(this.graphcontainer.nativeElement);
  }

  graphicsHandler(graphicsChange) {
    const graphicsType = graphicsChange.value;
    console.log(graphicsType)
    if (graphicsType === 'text') {
      this.showNodeAsText = true;
      this.showNodeAsBox = false;
    }
    if (graphicsType === 'box' ) {
      this.showNodeAsBox = true;
      this.showNodeAsText = false;
    }
    this.ngOnInit();
  }
}
