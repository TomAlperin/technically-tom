import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(title + ' | Technically Tom');
  }
  updateMetaTag(metaTag: MetaDefinition) {
    this.meta.updateTag(metaTag, `${metaTag.name ? 'name' : 'property'}='${metaTag.name || metaTag.property}'`);
  }
  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => {
      if (m.name) {
        this.meta.updateTag(m, `name='${m.name}'`)
      } else if (m.property) {
        this.meta.updateTag(m, `property='${m.property}'`)
      }
    });
  }
}
