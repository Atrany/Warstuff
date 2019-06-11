/* import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";


@Injectable()
export class WarframeFavoriProvider {

  constructor(private storage: Storage) {

  }
 
  addWarframeFavori(warframe: Warframe) {
    this.storage.set(this.getMovieKey(warframe), JSON.stringify(warframe));
  }
 
  removeWarframeFavori(warframe: Warframe) {
    this.storage.remove(this.getMovieKey(warframe));
  }
 
  isWarframeFavori(warframe: Warframe) {
    return this.storage.get(this.getMovieKey(warframe));
  }
 
  toogleWarframeFavori(warframe: Warframe) {
    this.isWarframeFavori(warframe).then(
      isFavorite =>
        isFavorite
        ? this.removeWarframeFavori(warframe)
        : this.addWarframeFavori(warframe)
    );
  }
 
  getMovieKey(warframe: Warframe) {
    return warframe.name;
  }
 
  getWarframeFavori(): Promise<Warframe[]> {
    return new Promise(resolve => {
      let results: Warframe[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }
}
 */