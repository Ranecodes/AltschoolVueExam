<template>
    <div class="card-details" >
        <div class="card-details__header">
            <div class="card-details__header__title">
                <h1>{{ repo.name }}</h1>
            </div>
            <div class="card-details__header__description">
                <p>{{ repo.description }}</p>
            </div>
        </div>
        <div class="card-details__body">
            <div class="card-details__body__info">
                <div class="card-details__body__info__item">
                    <div class="card-details__body__info__item__title">
                        <h3>Stars</h3>
                    </div>
                    <div class="card-details__body__info__item__value">
                        <p>{{ repo.stargazers_count }}</p>
                    </div>
                </div>
                <div class="card-details__body__info__item">
                    <div class="card-details__body__info__item__title">
                        <h3>Watchers</h3>
                    </div>
                    <div class="card-details__body__info__item__value">
                        <p>{{ repo.watchers_count }}</p>
                    </div>
                </div>
                <div class="card-details__body__info__item">
                    <div class="card-details__body__info__item__title">
                        <h3>Forks</h3>
                    </div>
                    <div class="card-details__body__info__item__value">
                        <p>{{ repo.forks_count }}</p>
                    </div>
                </div>
                <div class="card-details__body__info__item">
                    <div class="card-details__body__info__item__title">
                        <h3>Open Issues</h3>
                    </div>
                    <div class="card-details__body__info__item__value">
                        <p>{{ repo.open_issues_count }}</p>
                    </div>
                </div>
            </div>
            <div class="card-details__body__info">
                <div class="card-details__body__info__item">
                    <div class="card-details__body__info__item__title">
                        <h3>Owner</h3>
                    </div>
                    <div class="card-details__body__info__item__value">
                        <p>{{ repo.owner.login }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RepoDetails",
    props: {
        repo: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.card-details {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.card-details__header {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f5f5f5;
}

.card-details__header__title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.card-details__header__title h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
}

.card-details__header__description {
    display: flex;
    align-items: center;
}

.card-details__header__description p {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
}

.card-details__body {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.card-details__body__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}

.card-details__body__info__item {
    display: flex;
    flex-direction: column;
    width: 25%;
}

.card-details__body__info__item__title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.card-details__body__info__item__title h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
}

.card-details__body__info__item__value {
    display: flex;
    align-items: center;
}

.card-details__body__info__item__value p {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
}

.card-details__body__info__item__value p span {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
}

.card-details__body__info__item__value p span a {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
    text-decoration: none;
}

.card-details__body__info__item__value p span a:hover {
    text-decoration: underline;
}

.card-details__body__info__item__value p span a:visited {
    color: #333;
}

.card-details__body__info__item__value p span a:active {
    color: #333;
}

.card-details__body__info__item__value p span a:link {
    color: #333;
}

</style>