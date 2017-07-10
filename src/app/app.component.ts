import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'タスク管理';

  tasks: any[];
  header: any;
  task: Task;
  dialogVisible: boolean = false;
  idGen: number = 100;

  ngOnInit() {
    this.tasks = [
      {
        "id": 0,
        "title": "iOS PDFライブラリ",
        "start": "2017-07-01",
        "end": "2017-07-02"
      },
      {
        "id": 1,
        "title": "情報基礎",
        "start": "2017-07-07",
        "end": "2017-07-12"
      }
    ];

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  };

  handleDayClick(task) {
    this.task = new Task();
    this.task.start = task.date.format();
    this.dialogVisible = true;
  }

  handleEventClick(e) {
  }

  saveEvent() {
    //update
    if(this.task.id) {
      let index: number = this.findEventIndexById(this.task.id);
      if(index >= 0) {
        this.tasks[index] = this.task;
      }
    }
    //new
    else {
      this.task.id = this.idGen++;
      this.tasks.push(this.task);
      this.task = null;
    }

    this.dialogVisible = false;
  }


  deleteEvent() {
    let index: number = this.findEventIndexById(this.task.id);
    if(index >= 0) {
      this.tasks.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id: number) {
    let index = -1;
    for(let i = 0; i < this.tasks.length; i++) {
      if(id == this.tasks[i].id) {
        index = i;
        break;
      }
    }

    return index;
  }
}

export class Task {
    id: number;
    title: string;
    start: string;
    end: string;
    allDay: boolean = true;
}



