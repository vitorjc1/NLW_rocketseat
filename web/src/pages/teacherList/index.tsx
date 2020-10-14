import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';
import TeacherItem, { Teacher } from '../../components/TeacherItem';



function TeacherList() {

    const [subject, setSubject] = useState('');
    const [weekDay,setWeekDay] = useState('');
    const [time,setTime] = useState('');

    const [teachers, setTeachers] = useState([
        {id:0, subject:'',cost:0,user_id:0,name:'',avatar:'',whatsapp:'',bio:''}
    ]);

    async function searchTeacher(e: FormEvent){
        e.preventDefault();

       const teachersSelected =  await api.get('/classes', {
            params: {
                week_day: weekDay,
                subject,
                time 
            }
        })

        setTeachers(teachersSelected.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeacher}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Física', label: 'Física' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                   
                    <Input type="time" name="time" label="Hora" value={time} onChange={e => setTime(e.target.value)} />

                    <button type='submit'>
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main>
                
                {teachers.map((teacher: Teacher)=>{
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                          
            </main>
        </div>

    )
}

export default TeacherList;