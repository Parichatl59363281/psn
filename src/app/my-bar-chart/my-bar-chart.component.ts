import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChatLabels = ['ค่าเฉลี่ยที่น้อยที่สุด', 'ค่าเฉลี่ยที่มากที่สุด'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [32.87171429, 187.147], label: 'ไม่เป็นโรคเบาหวาน'},
    {data: [45.64871429, 223.214], label: 'เป็นโรคเบาหวาน'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
