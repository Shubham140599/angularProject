import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'apiData'
  dataArray: any = []
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://studiovity.com/api/v1/mail/getMailTemplate').subscribe((res) => {
      console.log(res)
      console.log(res['template'])
      this.dataArray = res['template']
      setTimeout(() => {
        document.getElementById('heading' + this.dataArray._id).innerHTML = JSON.parse(this.dataArray.html)
      }, 300)
    })
  }
}
