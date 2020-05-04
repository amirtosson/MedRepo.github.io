import { Component, OnInit, Input } from '@angular/core';
import { MedRepoHeaderbarItem} from 'src/assets/components/medrepo-headerbar/medrepo-headerbar-item';
import { MedRepoHeaderbarDropMenuItem} from 'src/assets/components/medrepo-headerbar/medrepo-headerbar-dropmenu-item';


@Component({
  selector: 'app-medrepo-headerbar',
  templateUrl: './medrepo-headerbar.component.html',
  styleUrls: ['./medrepo-headerbar.component.css']
})
export class MedrepoHeaderbarComponent implements OnInit {

    @Input()
    public headerItems: MedRepoHeaderbarItem[] = undefined;
    
    @Input()
    public headerDMItems: MedRepoHeaderbarDropMenuItem[] = undefined;

    dropMenuButtonClas: string;

    constructor() { 
    }

    ngOnInit() {
    
    
    }

}
