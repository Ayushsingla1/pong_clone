import { Link } from "react-router-dom";

const LiveCard = ({match}) => {
    return ( 
        <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-between bg-[#373737] w-10/12 p-[10px] rounded-md">
                <div>
                    <img src={match.home_team_logo} alt="Error Loading"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-4 w-8/12">
                    <div className="flex gap-x-[10px]">
                        <span className=" text-center uppercase font-bold text-3xl text-red-600"><Link to={`/LiveStats/${match.event_key}`}>{match.event_home_team}</Link></span>
                        <span className=" text-center font-bold text-3xl"><Link to={`/LiveStats/${match.event_key}`}>VS</Link></span>
                        <span className=" text-center uppercase font-bold text-3xl text-blue-600"><Link to={`/LiveStats/${match.event_key}`}>{match.event_away_team}</Link></span>
                    </div>
                    <div>
                        <span>Match No</span>
                        
                    </div>
                    <div className="uppercase font-bold text-2xl">
                        <span>{match.league_name}</span>
                    </div>
                    <div><span>{match.event_status}</span></div>
                </div>
                <div>
                    <img src={match.away_team_logo} alt="Error Loading"/>
                </div>
            </div>
        </div>
     );
}
 
export default LiveCard;