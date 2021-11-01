console.log(a)

// {
//   // a = 0
//   function a() {}
//   a = 1
//   console.log("我是里面的 a", a)
// }

{
  var a = function() {}
}
console.log(a)