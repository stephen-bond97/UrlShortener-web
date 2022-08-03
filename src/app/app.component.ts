import { Component } from '@angular/core';
import { ShortenerService } from './services/ShortenerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public InputUrl = "";
  public ShortUrl = "";
  public showShortUrl = false;

  /**
   *
   */
  public constructor(private service: ShortenerService) {

  }

  public HandleShortUrlClick() {
    this.service.ShortenUrl(this.InputUrl).subscribe((shortUrl) => this.handleUrlShortened(shortUrl));
  }

  private handleUrlShortened(shortUrl: string) {
    this.ShortUrl = `https://sbond-url-shortener.herokuapp.com/shortener/${shortUrl}`;
    this.showShortUrl = true;
  }

  public copyToClipboard(input: HTMLInputElement, event: MouseEvent): void {
    event.stopPropagation();

    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);
    this.showShortUrl = false;
  }
}
