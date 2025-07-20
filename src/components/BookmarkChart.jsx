import { Line } from "react-chartjs-2";

export default function BookmarkChart({ labels, data }) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Bookmarks',
            data,
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,0.1)',
            tension: 0.3,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#22c55e',
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `Total: ${context.raw}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
}
