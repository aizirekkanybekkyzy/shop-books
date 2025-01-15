import styled from "styled-components"

const Compon = ({Summa}) => {

  const iphone =[{
   
      id: 1,
      Name: "Apple",
      model: "iPhone 14 Pro",
      memory: "128GB",
      image: "https://example.com/iphone14pro.jpg",
      price: 1200,
      manufacture: "USA",
},
{
  id: 2,
  Name: "Samsung",
  model: "Galaxy S23 Ultra",
  memory: "256GB",
  image: "https://example.com/galaxys23ultra.jpg",
  price: 1100,
  manufacture: "South Korea",
},
{
  id: 3,
  Name: "Google",
  model: "Pixel 8",
  memory: "128GB",
  image: "https://example.com/pixel8.jpg",
  price: 800,
  manufacture: "USA",
},
{
  id: 4,
  Name: "Xiaomi",
  model: "Mi 13 Pro",
  memory: "512GB",
  image: "https://example.com/mi13pro.jpg",
  price: 900,
  manufacture: "China",
},
{
  id: 5,
  Name: "OnePlus",
  model: "OnePlus 11",
  memory: "256GB",
  image: "https://example.com/oneplus11.jpg",
  price: 750,
  manufacture: "China",
},
{
  id: 6,
  Name: "Huawei",
  model: "P60 Pro",
  memory: "256GB",
  image: "https://example.com/p60pro.jpg",
  price: 950,
  manufacture: "China",
},
{
  id: 7,
  Name: "Sony",
  model: "Xperia 1 V",
  memory: "512GB",
  image: "https://example.com/xperia1v.jpg",
  price: 1200,
  manufacture: "Japan",
},
{
  id: 8,
      Name: "Oppo",
      model: "Find X6 Pro",
      memory: "256GB",
      image: "https://example.com/findx6pro.jpg",
      price: 850,
      manufacture: "China",
},
{
  id: 9,
  Name: "Vivo",
  model: "X90 Pro",
  memory: "512GB",
  image: "https://example.com/x90pro.jpg",
  price: 890,
  manufacture: "China",
},
{
  id: 10,
      Name: "Motorola",
      model: "Edge 40 Pro",
      memory: "256GB",
      image: "https://example.com/edge40pro.jpg",
      price: 700,
      manufacture: "USA",
}
]
   const onClick = ()=>{
    Summa(iphone)
   }

return (<ColarButton onClick={onClick}>Click</ColarButton>
  
)
};

export default Compon;


const ColarButton = styled.button`
    border : 1px solid;
    background-color : #0faa31;
    padding : 10px 40px;
    margin-left: 40px;
    border-radius: 5px;
    margin-top : 10px;
    border: none;
    font-weight :900;
    color : wheat;
    box-shadow : 0px 0px 4px 5px yellowgreen;
`