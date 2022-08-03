import { Component } from '@angular/core';
import { ShortenerService } from './services/ShortenerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly URL_PATTERN = "[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)";
  public InputUrl = "";

  /**
   *
   */
  public constructor(private service: ShortenerService) {

  }

  public HandleShortUrlClick() {
      this.service.ShortenUrl(this.InputUrl).subscribe((shortUrl) => this.handleUrlShortened(shortUrl));
  }

  private handleUrlShortened(shortUrl: string) {
    console.log(shortUrl);
  }
}
