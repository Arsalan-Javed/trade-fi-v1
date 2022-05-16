import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMenu } from 'src/app/models/user-menu';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  public items: UserMenu[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadItems();


    // delete thiz
    const icons = [
      "approvallWorkflow",
      "contractTerms",
      "projectManagement",
      "budgetManagement",
      "documentType",
      "userManagement",
    ]

    this.items.forEach(item => {
      if (item.icon === undefined) {
        item.icon = icons[Math.floor(Math.random() * icons.length)];
      }
    });
    // delete thiz
  }
  private loadItems() {
    var parentKey = this.route.snapshot.data['parentKey'];
    if (parentKey) {
      this.items = this.userService.getMenusByParentKey(parentKey);
      console.log(this.items);
    }
  }
  action(item: UserMenu) {
    if (item.link) {
      this.router.navigate([item.link]);
    }
  }
}
