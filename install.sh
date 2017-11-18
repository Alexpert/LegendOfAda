#!/bin/sh

rm -r /var/www/legendofada/api/*
rm -r /var/www/legendofada/www/*

cp -r Controller/* /var/www/legendofada/api/
cp -r Views/Web/* /var/www/legendofada/www/
