function getMonthName (month) {
  month = month-1;

  const months = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ]

  if(months[month] != null){
    console.log(months[month]);
  } else{
    throw new Error('入力値は無効です。');
    // const err = new Error();
    // error.message = 'error';
    // throw err;
  }

}

// monthName = getMonthName(13);

try {
  monthName = getMonthName(13);
}
catch (e) {
  console.log(e)
}