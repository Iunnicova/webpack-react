import React, { useState, ChangeEvent } from 'react'
import './index.css'

export const App = () => {
	//переключаем цвет
	// //значение переменной  setIsDark меняем не на прямую а через значения функции в данный момент придумали сами setIsDark
	// const [isDark, setIsDark] = useState(true)

	// const onClickHandler = () => {
	// 	// 1 вариант

	// 	//* setIsDark(!isDark); // ! - переключает цвета, если не поставить ! ничего не будет, переконвектирует

	// 	// 2 вариант добавляет оптимитизации
	// 	setIsDark((value) => {
	// 		return !value
	// 	})
	// }

	// return (
	// 	<div className={isDark ? 'dark' : 'light'}>
	// 		<button onClick={onClickHandler}>Переключить тему</button>
	// 	</div>
	// )

	//делаем поле input имя и пароль

	const [data, setData] = useState({ name: '', password: '' })

  // 1 вариант записи
	//*  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
	//* 	setData((currentData) => {
  //*   return { name: event.target.value, password: currentData.password };
	//*});
  //* }

	//* const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
	//* 	setData((currentData) => {
  //*     return {name: currentData.name, password: event.target.value }
	//*  })
  //*  }


    //2 вариант лучше 1 по другому

     const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
		setData((currentData) => ({
      ...currentData,
    name: event.target.value,
	}));
 }

	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setData((currentData) => ({
     ...currentData,
     password: event.target.value 
	}))
}

	return (
		<div>
			<input type='text' onChange={onChangeName} />
			<input type='password' onChange={onChangePassword} />

			<p>Ваше имя: {data.name}</p>
			<p>Ваш пароль: {data.password}</p>
		</div>
	)
}
