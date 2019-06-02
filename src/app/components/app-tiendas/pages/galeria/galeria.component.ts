import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imgs = [
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558653958/maqueta/nails-simpsons0001.jpg',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558685374/maqueta-nueva/rBVaSFugIfaAY4yUAANjdmU9NaI424.jpg',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558685285/maqueta-nueva/3716ec04e1b1a378cc302acd0a12f0801478603.jpg',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558685192/maqueta-nueva/5jRvrOFOv900F-9hMWj-jGvIweGpQyn-vriCbcJWTHmrIH_jzQJ0LupvYqchJ3XTQs6E6HQccbzhvkqkRN4krQ.jpg',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558685162/maqueta-nueva/KwfWrfE54jlMdpn1mJ69qsF7wEzP_AIaN_8cPoVFUKSZc63ep-j1qrxJEHPk8Gg_Qs6E6HQccbzhvkqkRN4krQ.jpg',
    'https://res.cloudinary.com/ddon9fx1n/image/upload/v1558685256/maqueta-nueva/pWUNveNHe-MzFrlCeVMHN7duakmItHiQAlLKXs5lLNxvfvmCFea7O1M-cDth5-B8Qs6E6HQccbzhvkqkRN4krQ.jpg'

  ]

  constructor(private _control: ControlService) { }

  ngOnInit() {
    this._control.setPage('galeria');
  }

}
