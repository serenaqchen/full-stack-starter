import {useState, useEffect} from "react";
import Api from "../Api";
import {useHistory, useParams} from "react-router-dom"

function SkillsForm(){
    const {id} = useParams();
    const history = useHistory();
    const [skill, setSkill] = useState({
        name: '',
        postion: 0
    });

    useEffect(function(){
        if (id) {
            Api.skills.get(id).then((response) => setSkill(response.data))
        }
    }, []);

    function onChange(event) {
        const newSkill = {...skill};
        newSkill[event.target.name] = event.target.value;
        setSkill(newSkill)
    }

    async function onSubmit(event){
        event.preventDefault();
        try {
            if (id){
                await Api.skills.update(id,skill); 
            } else {
                await Api.skills.create(skill);
            }
            history.push('/skills');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Skills Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" value={skill.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Postition</label>
                    <input className="form-control" type="text" name="position" value={skill.position} onChange={onChange}/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default SkillsForm