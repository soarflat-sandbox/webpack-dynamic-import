import _ from 'lodash';

export default async function module() {
  await delayHello();
  console.log('after delayHello');
  delayError().catch(error => {
    console.log('error');
  });
}

function delayHello() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(_.join(['Hello', 'webpack'], ' '));
      resolve();
    }, 2000);
  });
}

function delayError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      throw 'Uh-oh!';
    }, 2000);
  });
}
