function Stats() {

const stats=[
{
number:"10+",
title:"Years Experience"
},
{
number:"100+",
title:"IT Professionals Placed"
},
{
number:"500+",
title:"Interviews Coordinated"
},
{
number:"50+",
title:"Client & Vendor Partnerships"
}
]

return(

<section
style={{
padding:"80px 10%",
background:"#0f172a",
color:"white"
}}
>

<h2
style={{
textAlign:"center",
fontSize:"42px",
marginBottom:"50px",
color:"#38bdf8"
}}
>
Professional Statistics
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"25px"
}}
>

{
stats.map((item,index)=>(

<div
key={index}
style={{
background:"#1e293b",
padding:"40px",
borderRadius:"15px",
textAlign:"center"
}}
>

<h1
style={{
fontSize:"55px",
color:"#38bdf8"
}}
>
{item.number}
</h1>

<h3>
{item.title}
</h3>

</div>

))
}

</div>

</section>

)

}

export default Stats;