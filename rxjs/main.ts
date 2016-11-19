import { Observable, Observer } from 'rxjs';

let numbers = [1,2,3];
let dataSource = Observable.from(numbers);

class MyObserver implements Observer<number> {

    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.error(`error: ${e}`);
    }

    complete() {
        console.log('complete')
    }
}

dataSource.subscribe(new MyObserver());