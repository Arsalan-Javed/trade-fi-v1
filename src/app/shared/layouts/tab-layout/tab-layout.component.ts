import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMenu } from 'src/app/models/user-menu';
import { UserService } from 'src/app/services/index.ts';

@Component({
  selector: 'app-tab-layout',
  templateUrl: './tab-layout.component.html',
  styleUrls: ['./tab-layout.component.scss']
})
export class TabLayoutComponent implements OnInit {
  // @Input() items = <any>[];
  public items: UserMenu[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadItems();

  }
  private loadItems() {
    var parentKey = this.route.snapshot.data['parentKey'];
    if (parentKey) {
      this.items = this.userService.getMenusByParentKey(parentKey);
      console.log(this.items);
      var x = this.items.find(e => e.link === this.router.url)
      if (x) {
        x.selected = true
      }
    }
  }
  action(item: UserMenu) {
    this.items.forEach(element => {
      element.selected = false;
    });
    item.selected = true;
    this.router.navigate([item.link]);
  }
}
