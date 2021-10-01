<template>
  <div class="AppFooter container">
    <div class="AppFooter__copyright">Copyright © 2021 Кременчуцький завод причепів Лев - Причепи ЛЕВ levpricep.com.ua</div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped lang="scss">
.AppFooter {
  display: flex;
  justify-content: center;
  align-content: center;
  background: #E21E24;
  padding-top: 2%;
  padding-bottom: 2%;

  &__copyright {
    font-weight: normal;
    font-size: $h18;
    line-height: $h28;
    text-align: center;

    color: #FFFFFF;
    @media (max-width: 768px) {
      font-size: 11px;
      line-height: 13px;
    }
  }
}
</style>
