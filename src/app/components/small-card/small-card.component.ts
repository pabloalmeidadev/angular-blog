import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input()
  photoCover:string ="https://i.stack.imgur.com/luaq2.png"
  @Input()
  cardTitle:string ="Nova serie anunciada"

}
