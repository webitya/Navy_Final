import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/index';
import { FormTable } from '../../components/formTable';
import { UserDetailPopup } from '../../components/userDetailsPopup';
import NavbarEl2 from '../../Shared/NavbarEl2';
import FooterEl from '../../Shared/FooterEl';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// Helper function to get month name and year
const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

export const AdminPanel = () => {

    const navigate = useNavigate();
    const { user } = useAppContext();
    const [forms, setForms] = useState([]);
    const [stats, setStats] = useState([]);
    const [filter, setFilter] = useState('monthly');
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchForms = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URI}/api/getformdata`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }, { withCredentials: true });
                setForms(response.data.data);
            } catch (err) {
                setError('Failed to fetch forms. Please try again later.');
            }
        };

        const fetchStats = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URI}/api/getquerydata?type=${filter}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }, { withCredentials: true });
                // Convert _id to month names
                const formattedStats = response.data.data.map(stat => ({
                    ...stat,
                    _id: filter === 'monthly' ? formatMonthYear(stat._id) : stat._id,
                }));
                setStats(formattedStats);
            } catch (err) {
                setError('Failed to fetch statistics. Please try again later.');
            }
        };

        fetchStats();
        fetchForms();
    }, [user, filter]);

    const data = {
        labels: stats?.map((stat) => stat._id), // Formatted _id values
        datasets: [
            {
                label: `Forms submitted (${filter})`,
                data: stats?.map((stat) => stat.count),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Submission Statistics (Monthly)' },
        },
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
        },
    };

    return (
        <>
            <NavbarEl2 />
            <div className="p-5 container mx-auto">
                <h1 className="text-center text-2xl font-bold mb-4">Admin Panel</h1>
                <div className="text-center mb-4">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>

                {error && <div className="text-red-500 text-center">{error}</div>}

                <div className="mb-8 h-[400px]">
                    <Line data={data} options={options} />
                </div>

                {forms && <FormTable forms={forms} onViewDetails={setSelectedUser} setForms={setForms} />}

                {selectedUser && (
                    <UserDetailPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
                )}
            </div>
            <FooterEl />
        </>
    );
};

export default AdminPanel;
