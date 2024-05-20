FROM php:8.2

# Install packages
RUN apt-get update && apt-get install -y \
    openssl \
    git \
    unzip \
    libicu-dev \
    libzip-dev \
    libmagickwand-dev \
    inkscape

# Install PHP extensions
RUN docker-php-ext-configure intl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

RUN docker-php-ext-install -j$(nproc) \
    intl \
    pdo \
    pdo_mysql \
    opcache \
    zip \
    gd

RUN pecl install imagick
RUN docker-php-ext-enable imagick

# Install composer and set COMPOSER_HOME to writable directory
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ENV COMPOSER_HOME /tmp/.composer

# Enable development PHP configuration and copy project configuration
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY php.ini "$PHP_INI_DIR/conf.d/custom.ini"

# Set default user and working directory
USER www-data
WORKDIR /var/www/html
