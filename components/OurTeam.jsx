import { ourTeamContent } from "@/constants";
import { SectionTitle } from ".";

function OurTeam() {
  return (
    <section className="section-container">
      <SectionTitle title={"OUR TEAM"} description={"Meat our experts"} />
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-20 max-w-[1000px] w-full">
          {ourTeamContent.map((item) => (
            <div className="border p-1 rotate-45 group">
              <div className="bg-gray-200 w-28 h-28 flex items-center justify-center transition duration-1000 relative group-hover:bg-gray-600">
                <h6 className="font-bold text-gray-600 -rotate-45">UNIKA</h6>
                <div className="-rotate-45 text-white absolute text-center opacity-0 transition duration-1000 group-hover:opacity-100">
                  <i className={`${item.icon} text-xl`}></i>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
