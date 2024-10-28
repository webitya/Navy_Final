import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/index';
import { FormTable } from '../../components/formTable';
import { UserDetailPopup } from '../../components/userDetailsPopup';
import ImageSlider from '../../components/adminSlider';
import { useGetBanner } from '../../../hooks/useGetBanner';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const AdminPanel = () => {
    const navigate = useNavigate();
    const { user } = useAppContext();
    const [forms, setForms] = useState([]);
    const [stats, setStats] = useState([]);
    const [filter, setFilter] = useState('yearly');
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [banner, setBanner] = useState([])

    useEffect(() => {
        const fetchBanner = async () => {
            const response = await useGetBanner(setBanner);
        }
        fetchBanner();
    }, [user])


    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URI}/api/getformdata`, { withCredentials: true });
                setForms(response.data.data);
            } catch (err) {
                setError('Failed to fetch forms. Please try again later.');
            }
        };
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URI}/api/getquerydata?type=${filter}`, { withCredentials: true });
                setStats(response.data.data);
            } catch (err) {
                setError('Failed to fetch statistics. Please try again later.');
            }
        };

        fetchStats()
        fetchForms();
    }, [user])




    const data = {
        labels: stats?.map((stat) => stat._id),
        datasets: [
            {
                label: `Forms submitted (${filter})`,
                data: stats?.map((stat) => stat.count),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Submission Statistics' },
        },
    };


    return (
        <div className="p-5 max-w-3xl mx-auto">
            <h1 className="text-center text-2xl font-bold mb-4">Admin Panel</h1>
            <div className="text-center mb-4">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="yearly">Yearly</option>
                </select>
            </div>

            {error && <div className="text-red-500 text-center">{error}</div>}

            <div className="mb-8 h-[400px] " >
                <Bar data={data} options={options} />
            </div>

            {
                forms && <FormTable forms={forms} onViewDetails={setSelectedUser} setForms={setForms} />
            }

            {selectedUser && (
                <UserDetailPopup user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}

            <ImageSlider banner={banner} setBanner={setBanner} />
        </div>
    );
};

export default AdminPanel;