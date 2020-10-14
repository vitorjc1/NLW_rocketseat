import React, { FC } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher{
    avatar: string,
        cost: number,
        bio: string,
        id: number,
        name: string,
        subject: string,
        whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
            <p>{teacher.bio}</p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ {teacher.cost}</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )


}

export default TeacherItem;