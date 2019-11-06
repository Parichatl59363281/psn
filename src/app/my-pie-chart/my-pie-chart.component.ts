import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {
  public pieChartLabels = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
                  'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'];
  public pieChartData = [4.873605948, 141.3234201, 70.79925651, 22.08178439, 99.96282528,
                  35.11375465, 0.549546468, 37.07806691 ];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
