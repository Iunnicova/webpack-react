// import React, { useState, ChangeEvent } from 'react'
// import './index.css'

// export const Password = () => {

// 	//делаем поле input имя и пароль

// 	// const [name, setName] = useState('');
// 	// const [password, setPassword] = useState('');

// 	//2 объединяем в одну

// 	const [data, setData] = useState({ name: '', password: '' })

//   // 1 вариант записи
// 	//*  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
// 	//* 	setData((currentData) => {
//   //*   return { name: event.target.value, password: currentData.password };
// 	//*});
//   //* }

// 	//* const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
// 	//* 	setData((currentData) => {
//   //*     return {name: currentData.name, password: event.target.value }
// 	//*  })
//   //*  }


//     //2 вариант лучше 1 

//      const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
// 		setData((currentData) => ({
//       ...currentData,
//     name: event.target.value,
// 	}));
//  }

// 	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
// 		setData((currentData) => ({
//      ...currentData,
//      password: event.target.value 
// 	}))
// }

// 	return (
// 		<div>
// 			<input type='text' onChange={onChangeName} />
// 			<input type='password' onChange={onChangePassword} />

// 			<p>Ваше имя: {data.name}</p>
// 			<p>Ваш пароль: {data.password}</p>
// 		</div>
// 	)
// }
