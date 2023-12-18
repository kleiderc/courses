import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  toggle = false;

  constructor(readonly translate: TranslateService) {
  }
  ngOnInit(): void {
    this.translate.use('en');
  }

  onChangeButtonLabel(toggle: boolean): boolean {
    if (toggle) { this.translate.use('en'); } else { this.translate.use('fr'); }
    return this.toggle = !toggle;
  }
}
