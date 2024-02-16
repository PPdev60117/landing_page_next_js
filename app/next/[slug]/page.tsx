import Cardshow from "./Cardshow";

export interface datashow {image:string,name:string,content:string}

const datashow = [{image:'https://plus.unsplash.com/premium_photo-1661335215688-10ded91195eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'บริษัท ABC',content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ex laboriosam quaerat architecto. Atque cum quos, consequatur corporis excepturi fugiat a temporibus velit accusamus repellat, repudiandae quaerat veritatis, provident reiciendis!'},
{image:'https://plus.unsplash.com/premium_photo-1682145947866-334816597887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'การทำงานของเรา',content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ex laboriosam quaerat architecto. Atque cum quos, consequatur corporis excepturi fugiat a temporibus velit accusamus repellat, repudiandae quaerat veritatis, provident reiciendis!'},
{image:'https://plus.unsplash.com/premium_photo-1683134197304-cea8255ca06a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'คุ้มค่าคุ้มราคา',content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ex laboriosam quaerat architecto. Atque cum quos, consequatur corporis excepturi fugiat a temporibus velit accusamus repellat, repudiandae quaerat veritatis, provident reiciendis!'},
{image:'https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'บริการดูแลหลังการขาย',content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ex laboriosam quaerat architecto. Atque cum quos, consequatur corporis excepturi fugiat a temporibus velit accusamus repellat, repudiandae quaerat veritatis, provident reiciendis!'}]

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
    <div className="prompt-regular">
      <div className="w-full p-5">
        <h1 className="text-6xl md:text-9xl pt-[50px] text-center">{params.slug}</h1>
        <div className="flex flex-col">
        {datashow.map((data:datashow ,num:number)=>{
          return(
            <>
            <Cardshow data={data} num={num} key={num} />
            </>
          )
        })}
        </div>
      </div>
    </div>
    </>
  )
}