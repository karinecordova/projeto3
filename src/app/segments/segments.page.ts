import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
 categoria:any;
 texto:any;
 descricao: any;
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.categoria=ev.detail.value;
    console.log(this.categoria);
    console.log('Segment changed', ev);

    if(this.categoria=="friends"){
      this.texto="Grandes Amigos....";
      this.descricao="sldiudiusidu";
    }
    if(this.categoria=="enemies"){
      this.texto="Grandes Inimigos....";
      this.descricao="";
    }
  }

}
